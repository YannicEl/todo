export interface Task {
  id: string;
  date: number;
  subtasks: Subtask[];
}

export interface Subtask {
  id: string;
  completed: boolean;
  label: string;
}
