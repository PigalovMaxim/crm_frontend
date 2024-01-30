import { useEffect, useState } from "react";
import PlusIcon from "./assets/plus.png";
import { WidgetsTypes } from "@/entities/widget";
import Widget from "@/entities/widget/widget";
import { useUnit } from "effector-react";
import getWidgetsFx from "./api/getWidgets";
import Loader from "@/shared/loader";

export default function WidgetsList() {
  const [widgets, setWidgets] = useState<WidgetsTypes[]>([]);
  const isLoading = useUnit(getWidgetsFx.pending)

  useEffect(() => {
    const getData = async () => {
      const _widgets = await getWidgetsFx('test');
      setWidgets(_widgets);
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row flex-wrap justify-start items-start">
      {widgets.map((widget) => (
        <Widget key={widget.typeId} widget={widget} />
      ))}
      <button className="w-3/10 h-home-widget-height p-gap cursor-pointer">
        <div className="hover:bg-block-highlighted/20 transition-colors w-full h-full border-2 border-dashed border-white/40 rounded-lg flex justify-center items-center">
          <img
            alt="add widget"
            src={PlusIcon}
            className="w-40 h-40 opacity-40"
          />
        </div>
      </button>
    </div>
  );
}
