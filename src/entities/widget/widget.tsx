import {
  DaysWidgetType,
  WidgetsIds,
  WidgetsTypes,
  WorkingWidgetType,
} from "./widget.options";
import WorkingWidget from "./ui/workingWidget";
import DaysWidget from "./ui/daysWidget";

export default function Widget({ widget }: { widget: WidgetsTypes }) {
  if (widget.typeId === WidgetsIds.WORKING) {
    return <WorkingWidget widget={widget as WorkingWidgetType} />;
  }

  if (widget.typeId === WidgetsIds.DAYS) {
    return <DaysWidget widget={widget as DaysWidgetType} />;
  }

  return (
    <div className="w-3/10 h-home-widget-height p-gap">
      <div className="bg-block w-full h-full rounded-lg flex justify-center items-center"></div>
    </div>
  );
}
