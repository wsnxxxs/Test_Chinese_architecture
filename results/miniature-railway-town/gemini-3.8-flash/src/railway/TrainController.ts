import { Train } from './Train';
import { Station } from '../town/Station';

export type TrainState = 'RUNNING' | 'DECELERATING' | 'STOPPED_AT_STATION' | 'ACCELERATING' | 'PAUSED';

/**
 * 列车运动与车站停靠状态机控制器
 * 严格管理：
 * 1. 运行/暂停（暂停时车厢位移与 2 秒停留计时器全部冻结）
 * 2. 车站停留 2.0 秒逻辑（平滑进站、红灯停靠 2.0 秒、绿灯加速出站）
 * 3. 速度无级调节与快捷倍速
 * 4. 复位到确定初始状态
 */
export class TrainController {
  private train: Train;
  private station: Station;

  // 基础运行物理参数
  public baseSpeed: number = 8.5; // 基础世界单位/秒
  public speedMultiplier: number = 1.0; // 倍速 (0.25 ~ 3.0)
  public currentSpeed: number = 8.5;
  public traveledDistance: number = 0; // 当前在轨道上的累计里程
  public initialDistance: number = 0;

  // 运行/暂停开关
  public isPaused: boolean = false;

  // 状态机
  public state: TrainState = 'RUNNING';
  private stateBeforePause: TrainState = 'RUNNING';

  // 车站停靠参数
  public stationStopDist: number; // 车站中心距离
  public stopDuration: number = 2.0; // 车站停留 2.0 秒
  public stopTimer: number = 0; // 停留倒计时累加器
  private hasStoppedThisLap: boolean = false;

  // 平滑加减速控制
  private readonly decelDist: number = 5.0; // 进站减速区间长度
  private readonly accelDist: number = 5.0; // 出站加速区间长度

  // 回调通知 UI
  public onStateChange?: (state: TrainState, remainingTime?: number) => void;

  constructor(train: Train, station: Station) {
    this.train = train;
    this.station = station;

    // 计算车站停靠中心点的实际弧长里程
    const totalLength = this.train.trackCurve.totalLength;
    this.stationStopDist = this.train.trackCurve.stationStopU * totalLength;

    // 初始位置：设在进站前约 14 个单位，打开页面行驶约 1.5 秒即可体验到站停靠 2.0 秒完整流程
    this.initialDistance = (this.stationStopDist - 14.0 + totalLength) % totalLength;
    this.traveledDistance = this.initialDistance;

    this.train.updatePosition(this.traveledDistance);
    this.station.setSignalState(false); // 默认绿灯
  }

  /**
   * 运行 / 暂停切换
   */
  public togglePlayPause(): boolean {
    if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
    return !this.isPaused;
  }

  public pause() {
    if (this.isPaused) return;
    this.isPaused = true;
    this.stateBeforePause = this.state;
    this.state = 'PAUSED';
    if (this.onStateChange) this.onStateChange(this.state);
  }

  public resume() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.state = this.stateBeforePause;
    if (this.onStateChange) {
      const remaining = this.state === 'STOPPED_AT_STATION' ? Math.max(0, this.stopDuration - this.stopTimer) : undefined;
      this.onStateChange(this.state, remaining);
    }
  }

  /**
   * 调节运行倍速
   */
  public setSpeedMultiplier(mult: number) {
    this.speedMultiplier = Math.max(0.2, Math.min(3.0, mult));
  }

  /**
   * 复位到初始确定的机位、列车位置与速度
   */
  public reset() {
    this.isPaused = false;
    this.speedMultiplier = 1.0;
    this.traveledDistance = this.initialDistance;
    this.currentSpeed = this.baseSpeed;
    this.state = 'RUNNING';
    this.stateBeforePause = 'RUNNING';
    this.stopTimer = 0;
    this.hasStoppedThisLap = false;

    this.train.updatePosition(this.traveledDistance);
    this.station.setSignalState(false); // 恢复绿灯

    if (this.onStateChange) this.onStateChange(this.state);
  }

  /**
   * 每帧更新物理运动与车站停留状态机
   */
  public update(delta: number) {
    // 关键要求：暂停时车厢与到站计时全部暂停！
    if (this.isPaused) {
      return;
    }

    const totalLength = this.train.trackCurve.totalLength;
    const targetSpeed = this.baseSpeed * this.speedMultiplier;

    // 当前在曲线闭环中的里程 (0 ~ totalLength)
    const currentLapDist = ((this.traveledDistance % totalLength) + totalLength) % totalLength;

    // 计算距离车站停靠点的有向距离
    let distToStation = this.stationStopDist - currentLapDist;
    if (distToStation < -totalLength / 2) distToStation += totalLength;
    if (distToStation > totalLength / 2) distToStation -= totalLength;

    // 状态机处理
    switch (this.state) {
      case 'RUNNING': {
        this.currentSpeed = targetSpeed;
        this.station.setSignalState(false);

        // 如果火车头进入车站减速范围 (进站前 decelDist 距离内)，且本圈尚未停靠
        if (!this.hasStoppedThisLap && distToStation > 0 && distToStation <= this.decelDist) {
          this.state = 'DECELERATING';
          if (this.onStateChange) this.onStateChange(this.state);
        }

        // 离开车站一段距离后（例如行驶超过出站 12 单位），重置本圈停靠标记，供下一圈使用
        if ((distToStation < -12.0 || distToStation > 15.0) && this.hasStoppedThisLap) {
          this.hasStoppedThisLap = false;
        }
        break;
      }

      case 'DECELERATING': {
        // 临近车站，平滑衰减速度至 0
        const progress = Math.max(0, distToStation / this.decelDist);
        this.currentSpeed = targetSpeed * Math.max(0.15, progress);

        // 到达车站停靠点（距离小于 0.3 或刚越过）
        if (distToStation <= 0.3 || (distToStation < 0 && distToStation > -2.5)) {
          this.currentSpeed = 0;
          this.traveledDistance += distToStation; // 精准吸附至停靠正点
          this.state = 'STOPPED_AT_STATION';
          this.stopTimer = 0;
          this.hasStoppedThisLap = true;
          this.station.setSignalState(true); // 亮红灯
          if (this.onStateChange) this.onStateChange(this.state, this.stopDuration);
        }
        break;
      }

      case 'STOPPED_AT_STATION': {
        this.currentSpeed = 0;
        this.stopTimer += delta;

        const remaining = Math.max(0, this.stopDuration - this.stopTimer);
        if (this.onStateChange) this.onStateChange(this.state, remaining);

        // 停靠满 2.0 秒后发车
        if (this.stopTimer >= this.stopDuration) {
          this.state = 'ACCELERATING';
          this.station.setSignalState(false); // 恢复绿灯
          if (this.onStateChange) this.onStateChange(this.state);
        }
        break;
      }

      case 'ACCELERATING': {
        // 出站平滑加速回到目标速度
        const distFromStation = -distToStation; // 已经驶出的距离
        const progress = Math.min(1.0, Math.max(0.15, distFromStation / this.accelDist));
        this.currentSpeed = targetSpeed * progress;

        if (distFromStation >= this.accelDist) {
          this.state = 'RUNNING';
          if (this.onStateChange) this.onStateChange(this.state);
        }
        break;
      }
    }

    // 推进位移并更新三节车厢朝向与位置
    if (this.currentSpeed > 0) {
      this.traveledDistance += this.currentSpeed * delta;
      this.train.updatePosition(this.traveledDistance);
      this.train.rotateWheels(this.currentSpeed, delta);
    }
  }

  /**
   * 获取当前状态描述与剩余时间
   */
  public getStatusText(): { label: string; tag: string; countdown?: string } {
    if (this.isPaused) {
      return { label: '运行暂停', tag: 'PAUSED' };
    }
    switch (this.state) {
      case 'STOPPED_AT_STATION': {
        const left = Math.max(0, this.stopDuration - this.stopTimer).toFixed(1);
        return { label: `车站停靠中 · 停留还剩 ${left}s`, tag: 'STATION_STOP', countdown: `${left}s` };
      }
      case 'DECELERATING':
        return { label: '减速进站中 · 准备停靠', tag: 'DECEL' };
      case 'ACCELERATING':
        return { label: '出站加速中 · 信号绿灯', tag: 'ACCEL' };
      case 'RUNNING':
      default:
        return { label: '正常巡航中', tag: 'RUNNING' };
    }
  }
}
