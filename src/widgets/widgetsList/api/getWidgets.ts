import { widgetSetted } from "@/app/stores";
import { WidgetsTypes } from "@/entities/widget";
import { DaysTypes, WidgetsIds } from "@/entities/widget/widget.options";
import { createEffect } from "effector";

const getWidgetsFx = createEffect(
  async ({
    userId,
    widgetsIds,
  }: {
    userId: string;
    widgetsIds: WidgetsIds[];
  }): Promise<WidgetsTypes[]> => {
    if (!widgetsIds) return [];
    return new Promise((res) => {
      setTimeout(() => {
        widgetSetted([WidgetsIds.WORKING, WidgetsIds.DAYS]);
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

export default getWidgetsFx;
