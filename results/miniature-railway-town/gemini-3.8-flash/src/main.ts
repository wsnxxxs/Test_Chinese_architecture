import * as THREE from 'three';
import { SceneManager } from './scene/SceneManager';
import { BaseAndTerrain } from './scene/BaseAndTerrain';
import { TrackCurve } from './railway/TrackCurve';
import { TrackBuilder } from './railway/TrackBuilder';
import { Train } from './railway/Train';
import { TrainController } from './railway/TrainController';
import { Station } from './town/Station';
import { Buildings } from './town/Buildings';
import { TownDecorations } from './town/TownDecorations';
import { Lighting } from './scene/Lighting';
import { UIManager } from './ui/UIManager';

/**
 * 微缩铁路小镇桌面 3D 沙盘应用程序入口
 */
function initApp() {
  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container element not found!');
    return;
  }

  // 1. 初始化场景与渲染器
  const sceneManager = new SceneManager(container);
  const scene = sceneManager.scene;

  // 2. 构建底座、地质切面、起伏地形、河道水系与西北隧道丘陵
  const baseAndTerrain = new BaseAndTerrain();
  scene.add(baseAndTerrain.group);

  // 3. 构建连续闭合铁路与铁桥系统
  const trackCurve = new TrackCurve();
  const trackBuilder = new TrackBuilder(trackCurve);
  scene.add(trackBuilder.group);

  // 4. 构建火车站及配套设施
  const station = new Station();
  scene.add(station.group);

  // 5. 构建小镇主要建筑群 (市政厅钟楼、商业街、别墅木屋)
  const buildings = new Buildings();
  scene.add(buildings.group);

  // 6. 构建道路网、平交道口、复古路灯、喷泉与树木植被
  const townDecorations = new TownDecorations();
  scene.add(townDecorations.group);

  // 7. 构建微缩列车 (1 节蒸汽机车车头 + 2 节客运车厢)
  const train = new Train(trackCurve);
  scene.add(train.group);

  // 8. 建立列车运行与 2 秒到站停靠逻辑控制器
  const trainController = new TrainController(train, station);

  // 9. 构建全景光照与昼夜系统 (默认是暖阳长阴影的傍晚)
  const lighting = new Lighting(
    scene,
    station,
    buildings,
    townDecorations,
    train
  );

  // 10. 初始化悬浮毛玻璃交互控制面板
  const uiManager = new UIManager(trainController, lighting, sceneManager);

  // 暴露调试句柄
  (window as unknown as { __DIORAMA__: unknown }).__DIORAMA__ = {
    trainController,
    lighting,
    sceneManager,
    uiManager,
  };

  // 11. 渲染主循环
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    // 计算安全时间步长 (避免标签页切换时突变跳帧)
    const rawDelta = clock.getDelta();
    const delta = Math.min(rawDelta, 0.08);

    // 更新列车物理运动与车站状态机
    trainController.update(delta);

    // 更新风车转动
    baseAndTerrain.update(delta);

    // 更新光照平滑渐变
    lighting.update(delta);

    // 更新相机插值与跟随
    sceneManager.update(delta);

    // 刷新 UI 状态
    uiManager.updateStatus();

    // 渲染最终画面
    sceneManager.render();
  }

  animate();
  console.log('Alpine Miniature Railway Town initialized successfully.');
}

// 页面加载就绪后启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
