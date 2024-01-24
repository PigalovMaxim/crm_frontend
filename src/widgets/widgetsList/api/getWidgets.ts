import { WidgetsTypes } from "@/entities/widget";
import { WidgetsIds } from "@/entities/widget/widget.options";

export default async (userId: string): Promise<WidgetsTypes[]> => {
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
      ]);
    }, 2000);
  });
};
