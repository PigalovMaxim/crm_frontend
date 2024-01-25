import { Task } from "@/entities/task";
import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const tasksSetted = createEvent<Task[]>();
const $tasks = createStore<Task[]>([]).on(tasksSetted, (_, payload) => payload);

persist({ store: $tasks, key: "tasks-store" });

export default $tasks;
