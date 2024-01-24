import WidgetLayout from "../widgetLayout";
import { DaysTypes, DaysWidgetType } from "../../widget.options";
import classNames from "classnames";
import moment from "moment";

export default function DaysWidget({ widget }: { widget: DaysWidgetType }) {
  const { name, days } = widget;
  const currentDate = moment().date();
  return (
    <WidgetLayout
      widgetId={widget.typeId}
      className="w-3/10 h-home-widget-height"
    >
      <div className="bg-block w-full h-full rounded-lg flex flex-col justify-start items-center p-8">
        <h2 className="text-2xl text-white font-medium">{name}</h2>
        <div className="w-full grid gap-gap grid-cols-7 mt-10">
          {days.map((day, i) => (
            <div
              className={classNames("aspect-square", {
                "bg-c-red": day === DaysTypes.SKIP,
                "bg-c-green": day === DaysTypes.WORKING,
                "bg-yellow-300": day === DaysTypes.TIME_OFF,
                "bg-purple-500": day === DaysTypes.HOLIDAY,
                "bg-gray-400": day === DaysTypes.NONE,
                "border-2 border-white": currentDate === i + 1
              })}
            />
          ))}
        </div>
      </div>
    </WidgetLayout>
  );
}
