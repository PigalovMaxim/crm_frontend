import { WidgetsTypes } from "@/entities/widget";
import { WidgetsIds } from "@/entities/widget/widget.options";

export type ModalProps = {
  updateHandler: (widgets: WidgetsTypes[]) => void;
  widgets: WidgetsIds[];
};

export const WIDGETS_LIST: Record<WidgetsIds, string> = {
  [WidgetsIds.WORKING]: "Календарь рабочих часов",
  [WidgetsIds.DAYS]: "Календарь рабочих дней",
};
