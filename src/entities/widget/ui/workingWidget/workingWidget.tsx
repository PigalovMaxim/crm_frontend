import WidgetLayout from "../widgetLayout";
import CircularProgress from "@/shared/circularProgress";
import { WorkingWidget as WorkingWidgetType } from "../../widget.options";
import getHours from "../../utils/getHours";

export default function WorkingWidget({
  widget,
}: {
  widget: WorkingWidgetType;
}) {
  const { name, planHours, totalHours, workedToday } = widget;
  const remainingHours = 8 - workedToday;
  return (
    <WidgetLayout
      widgetId={widget.typeId}
      className="w-3/10 h-home-widget-height"
    >
      <div className="bg-block w-full h-full rounded-lg flex flex-col justify-start items-center p-8">
        <h2 className="text-2xl text-white font-medium">{name}</h2>
        <CircularProgress
          progress={(totalHours / planHours) * 100}
          size={200}
          color="#01953F"
          width={30}
        />
        <h3 className="text-lg text-white">
          Отработано {totalHours} из {planHours}
        </h3>
        <span className="text-white text-center mt-8">
          Сегодня было отработано
          <span className="mx-2 text-c-green text-xl font-bold">
            {workedToday}
          </span>
          {getHours(workedToday)}, осталось отработать
          <span className="mx-2 text-c-red text-xl font-bold">
            {remainingHours}
          </span>
          {getHours(remainingHours)}
        </span>
      </div>
    </WidgetLayout>
  );
}
