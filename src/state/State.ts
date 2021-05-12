import { Task } from '../types/Task';

export interface State {
  tasks: Task[];
  modalIsOpen: boolean;
}
