export enum TaskStatuses {
  PAUSED = "paused",
  IN_WORK = "in_work",
  NOT_WORKED = "not_worked",
}

export type Task = {
  id: string;
  title: string;
  hours: number;
  wasted_hours: number;
  status: TaskStatuses;
};
