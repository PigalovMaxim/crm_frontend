import { WidgetsIds } from "../widget.options";

export default async function removeWidget(widgetId: WidgetsIds) {
  return new Promise((res) => {
    setTimeout(() => {
      res(false);
    }, 2000);
  });
}
