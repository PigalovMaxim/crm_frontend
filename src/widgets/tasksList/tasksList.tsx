import { useEffect, useLayoutEffect } from "react";
import getTasksFx from "./api/getTasks";
import { useList, useUnit } from "effector-react";
import $tasks from "@/app/stores/tasks";
import Button from "@/shared/button";
import Task from "@/entities/task/task";
import { TaskTypes } from "@/entities/task/task.options";
import Loader from "@/shared/loader";

export default function TasksList() {
  const tasksList = useList($tasks, (item) => (
    <Task type={TaskTypes.LIST_ITEM} task={item} key={item.id} />
  ));
  const isLoading = useUnit(getTasksFx.pending);

  useLayoutEffect(() => {
    getTasksFx("test 1");
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 h-full mr-gap">
      <div className="w-full flex-1 overflow-y-auto">{tasksList}</div>
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
