import { nanoid } from 'nanoid';
import { MutationTree } from 'vuex';
import { Subtask, Task } from '../types/Task';
import { State } from './State';

export const mutations: MutationTree<State> = {
  addTask(
    state: State,
    task: { title: string; date: Date; subtasks: string[] }
  ) {
    const subtasks: Subtask[] = task.subtasks.map(task => ({
      id: nanoid(),
      completed: false,
      label: task
    }));

    const ret: Task = {
      id: nanoid(),
      date: task.date.getTime(),
      subtasks
    };

    state.tasks.push(ret);
  },
  removeTask(state: State, taskId: string) {
    const index = state.tasks.findIndex(task => task.id === taskId);
    if (index === -1) return;

    state.tasks.splice(index, 1);
  }
};
