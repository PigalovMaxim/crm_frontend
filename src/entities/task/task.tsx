import Button from "@/shared/button";
import { TaskTypes, Task as TaskType } from "./task.options";

export default function Task({
  type,
  task,
}: {
  type: TaskTypes;
  task: TaskType;
}) {
  if (type === TaskTypes.LIST_ITEM) {
    return (
      <div className="w-full h-14 bg-block mb-gap rounded-lg grid grid-cols-5 items-center px-4">
        <span className="text-white text-lg">{task.id}</span>
        <span className="text-white text-lg">{task.title}</span>
        <span className="text-white text-lg">
          {task.wasted_hours}/{task.hours}
        </span>
        <span className="text-white text-lg">{task.status}</span>
        <Button>Взять задачу</Button>
      </div>
    );
  }

  return null;
}
