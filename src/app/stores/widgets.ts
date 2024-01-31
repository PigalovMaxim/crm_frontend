import { WidgetsIds } from "@/entities/widget/widget.options";
import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const widgetAdded = createEvent<WidgetsIds>();
export const widgetRemoved = createEvent<WidgetsIds>();
export const widgetSetted = createEvent<WidgetsIds[]>();
const $widgets = createStore<WidgetsIds[]>([])
  .on(widgetAdded, (data, payload) => [...data, payload])
  .on(widgetSetted, (_, payload) => payload)
  .on(widgetRemoved, (data, payload) => data.filter((item) => item !== payload));

persist({ store: $widgets, key: "widgets-ids-store" });

export default $widgets;
