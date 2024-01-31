import { widgetRemoved } from "@/app/stores";
import { WidgetsIds } from "../widget.options";

export default async function removeWidget(widgetId: WidgetsIds) {
  return new Promise((res) => {
    setTimeout(() => {
      widgetRemoved(widgetId);
      res(false);
    }, 2000);
  });
}
