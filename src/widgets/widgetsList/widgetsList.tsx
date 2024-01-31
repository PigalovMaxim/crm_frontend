import { useEffect, useState } from "react";
import PlusIcon from "./assets/plus.png";
import { WidgetsTypes } from "@/entities/widget";
import Widget from "@/entities/widget/widget";
import { useUnit } from "effector-react";
import getWidgetsFx from "./api/getWidgets";
import Loader from "@/shared/loader";
import Button from "@/shared/button";
import addWidget from "./utils/addWidget";
import { ToastContainer } from "react-toastify";
import { $widgets } from "@/app/stores";

export default function WidgetsList() {
  const [widgets, setWidgets] = useState<WidgetsTypes[]>([]);
  const isLoading = useUnit(getWidgetsFx.pending);
  const widgetsIds = useUnit($widgets);

  const getData = async () => {
    const _widgets = await getWidgetsFx({ userId: "test", widgetsIds });
    setWidgets(_widgets);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (widgetsIds.length === widgets.length) return;
    if (widgetsIds.length > widgets.length) {
      getData();
      return;
    }
    setWidgets((_widgets) =>
      _widgets.filter((item) => widgetsIds.includes(item.typeId))
    );
  }, [widgetsIds]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!widgets.length) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white mb-4 font-bold">
          У вас нет виджетов
        </h1>
        <Button
          onClick={() => addWidget(widgetsIds, setWidgets)}
          addictionalStyles="!w-60"
        >
          Добавить
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row flex-wrap justify-start items-start">
      <ToastContainer position="bottom-right" />
      {widgets.map((widget) => (
        <Widget key={widget.typeId} widget={widget} />
      ))}
      <Button
        onClick={() => addWidget(widgetsIds, setWidgets)}
        className="w-3/10 h-home-widget-height p-gap cursor-pointer"
      >
        <div className="hover:bg-block-highlighted/20 transition-colors w-full h-full border-2 border-dashed border-white/40 rounded-lg flex justify-center items-center">
          <img
            alt="add widget"
            src={PlusIcon}
            className="w-40 h-40 opacity-40"
          />
        </div>
      </Button>
    </div>
  );
}
