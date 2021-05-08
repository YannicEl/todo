import { nanoid } from 'nanoid';
import { MutationTree } from 'vuex';
import { Subtask, Task } from '../types/Task';
import { State } from './State';

export const mutations: MutationTree<State> = {
  addTask(state: State) {
    const subtasks: Subtask[] = [];

    for (let i = 0; i < random(1, 5); i++) {
      subtasks.push({
        id: nanoid(),
        completed: i % 2 === 0,
        label: `Task ${i + 1}`,
      });
    }

    const task: Task = {
      id: nanoid(),
      days: random(1, 678),
      subtasks,
    };

    state.tasks.push(task);
  },
  removeTask(state: State, taskId: string) {
    const index = state.tasks.findIndex((task) => task.id === taskId);
    if (index === -1) return;

    state.tasks.splice(index, 1);
  },
};

const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
