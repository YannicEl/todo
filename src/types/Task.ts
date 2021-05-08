export interface Task {
  id: string;
  days: number;
  subtasks: Subtask[];
}

export interface Subtask {
  id: string;
  completed: boolean;
  label: string;
}
