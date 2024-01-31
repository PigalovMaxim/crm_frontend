import { modalOpened, widgetSetted } from "@/app/stores";
import { WidgetsTypes } from "@/entities/widget";
import changeWidgetsFx from "../api/changeWidgets";
import ChangeWidgetsModal from "../ui/changeWidgetsModal";
import { WidgetsIds } from "@/entities/widget/widget.options";

export default function addWidget(
  widgets: WidgetsIds[],
  setWidgets: (values: WidgetsTypes[]) => void
) {
  const updateHandler = async () => {
    const newWidgets = await changeWidgetsFx(widgets);
    widgetSetted(newWidgets.map((item) => item.typeId));
    setWidgets(newWidgets);
  };

  modalOpened({
    children: (
      <ChangeWidgetsModal updateHandler={updateHandler} widgets={widgets} />
    ),
  });
}
