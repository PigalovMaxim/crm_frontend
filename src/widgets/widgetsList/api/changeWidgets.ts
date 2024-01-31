import { WidgetsTypes } from "@/entities/widget";
import { DaysTypes, WidgetsIds } from "@/entities/widget/widget.options";
import { createEffect } from "effector";

const changeWidgetsFx = createEffect(
  async (newWidgets: WidgetsIds[]): Promise<WidgetsTypes[]> => {
    return new Promise((res) => {
      setTimeout(() => {
        res([
          {
            typeId: WidgetsIds.WORKING,
            name: "Рабочие часы",
            totalHours: 20,
            planHours: 100,
            workedToday: 3,
          },
          {
            typeId: WidgetsIds.DAYS,
            name: "Рабочие дни",
            days: [
              DaysTypes.WORKING,
              DaysTypes.WORKING,
              DaysTypes.WORKING,
              DaysTypes.WORKING,
              DaysTypes.WORKING,
              DaysTypes.SKIP,
              DaysTypes.SKIP,
              DaysTypes.HOLIDAY,
              DaysTypes.HOLIDAY,
              DaysTypes.HOLIDAY,
              DaysTypes.HOLIDAY,
              DaysTypes.HOLIDAY,
              DaysTypes.SKIP,
              DaysTypes.SKIP,
              DaysTypes.WORKING,
              DaysTypes.TIME_OFF,
              DaysTypes.WORKING,
              DaysTypes.WORKING,
              DaysTypes.WORKING,
              DaysTypes.SKIP,
              DaysTypes.SKIP,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
              DaysTypes.NONE,
            ],
          },
        ]);
      }, 2000);
    });
  }
);

export default changeWidgetsFx;
