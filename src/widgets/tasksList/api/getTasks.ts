import { tasksSetted } from "@/app/stores/tasks";
import { TaskStatuses } from "@/entities/task/task.options";
import { createEffect } from "effector";

const getTasksFx = createEffect(async (userId: string) => {
  await new Promise((res) => {
    setTimeout(() => {
      tasksSetted([
        {
          id: "1",
          title: "Сделать задачу 1",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "2",
          title: "Сделать задачу 2",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.PAUSED,
        },
        {
          id: "3",
          title: "Сделать задачу 3",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.IN_WORK,
        },
        {
          id: "4",
          title: "Сделать задачу 4",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "5",
          title: "Сделать задачу 5",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "6",
          title: "Сделать задачу 6",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "7",
          title: "Сделать задачу 7",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "8",
          title: "Сделать задачу 8",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "9",
          title: "Сделать задачу 9",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
        {
          id: "10",
          title: "Сделать задачу 10",
          hours: 20,
          wasted_hours: 0,
          status: TaskStatuses.NOT_WORKED,
        },
      ]);
      res(false);
    }, 2000);
  });
  return; 
});

export default getTasksFx;
