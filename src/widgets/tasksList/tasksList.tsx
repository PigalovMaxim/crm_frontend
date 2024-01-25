import { useEffect } from "react";
import getTasks from "./api/getTasks";
import { useUnit } from "effector-react";
import $tasks from "@/app/stores/tasks";
import Button from "@/shared/button";

export default function TasksList() {
  const tasks = useUnit($tasks);

  useEffect(() => {
    getTasks("test 1");
  }, []);

  return (
    <div className="flex flex-col flex-1 h-full mr-gap">
      <div className="w-full flex-1 overflow-y-auto">
        {tasks.map((item) => (
          <div
            className="w-full h-14 bg-block mb-gap rounded-lg grid grid-cols-5 items-center px-4"
            key={item.id}
          >
            <span className="text-white text-lg">{item.id}</span>
            <span className="text-white text-lg">{item.title}</span>
            <span className="text-white text-lg">
              {item.wasted_hours}/{item.hours}
            </span>
            <span className="text-white text-lg">{item.status}</span>
            <Button>Взять задачу</Button>
          </div>
        ))}
      </div>
      <div className="w-full h-14 flex flex-row justify-start items-center gap-x-4 mt-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <Button
            key={item}
            className="h-9/10 aspect-square border border-solid border-white rounded-lg text-white font-semibold text-xl"
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
