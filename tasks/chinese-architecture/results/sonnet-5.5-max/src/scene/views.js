// Named camera views (world coordinates). y is up, +z is south (the visitor's approach).
export const VIEWS = {
  overview: { label: '全景', pos: [-206, 102, 318], target: [0, 26, -22] },
  axis: { label: '中轴', pos: [0, 48, 330], target: [0, 32, -70] },
  hall: { label: '主殿', pos: [-122, 62, 34], target: [0, 32, -82] },
  gate: { label: '山门', pos: [-78, 32, 236], target: [0, 20, 116] },
  pagoda: { label: '宝塔', pos: [-160, 90, -28], target: [-58, 52, -122] },
  top: { label: '俯瞰', pos: [0, 620, 30], target: [0, 0, -14] },
  // used instead of `overview` on tall / portrait screens: along the axis, high up
  overviewPortrait: { label: '全景', pos: [-70, 470, 380], target: [0, 8, -34] },
};
export const VIEW_ORDER = ['overview', 'axis', 'hall', 'gate', 'pagoda', 'top'];
