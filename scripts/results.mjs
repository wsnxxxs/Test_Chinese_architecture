// The architecture task predates multiple tasks: its manifest entries have no
// `task` field and its projects live directly in results/<id>.
export const LEGACY_TASK = 'chinese-architecture';
export const taskIdOf = (entry) => entry.task ?? LEGACY_TASK;
export const resultDir = (entry) => (entry.task ? `results/${entry.task}/${entry.id}` : `results/${entry.id}`);

// --task=<task> and --id=<id>[,<id>...] select results; an id may also be written
// as <task>/<id>, so one command can cover results from several tasks.
export function resultFilter(argv = process.argv) {
  const arg = name => argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3);
  const task = arg('task'), ids = arg('id')?.split(',').filter(Boolean);
  return (taskId, id) => (!task || taskId === task) && (!ids || ids.some(item => item === id || item === `${taskId}/${id}`));
}
