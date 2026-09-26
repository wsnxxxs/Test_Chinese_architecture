// The architecture task predates multiple tasks: its manifest entries have no
// `task` field and its projects live directly in results/<id>.
export const LEGACY_TASK = 'chinese-architecture';
export const taskIdOf = (entry) => entry.task ?? LEGACY_TASK;
export const resultDir = (entry) => (entry.task ? `results/${entry.task}/${entry.id}` : `results/${entry.id}`);
