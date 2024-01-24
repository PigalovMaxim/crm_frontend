import {
  WidgetsIds,
  WidgetsTypes,
  WorkingWidget as WorkingWidgetType,
} from "./widget.options";
import WorkingWidget from "./ui/workingWidget";

export default function Widget({ widget }: { widget: WidgetsTypes }) {
  if (widget.typeId === WidgetsIds.WORKING) {
    return <WorkingWidget widget={widget as WorkingWidgetType} />;
  }

  return (
    <div className="w-3/10 h-home-widget-height p-gap">
      <div className="bg-block w-full h-full rounded-lg flex justify-center items-center"></div>
    </div>
  );
}
