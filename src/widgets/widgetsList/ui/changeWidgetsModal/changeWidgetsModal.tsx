import Button from "@/shared/button";
import { ModalProps, WIDGETS_LIST } from "./changeWidgetsModal.options";
import { useState } from "react";
import { WidgetsIds } from "@/entities/widget/widget.options";
import classNames from "classnames";
import { toast } from "react-toastify";
import changeWidgetsFx from "../../api/changeWidgets";
import { useUnit } from "effector-react";
import { modalClosed } from "@/app/stores";

export default function ChangeWidgetsModal({
  updateHandler,
  widgets,
}: ModalProps) {
  const [data, setData] = useState<WidgetsIds[]>(widgets);
  const isLoading = useUnit(changeWidgetsFx.pending);

  const onPressHandler = (isSelected: boolean, id: WidgetsIds) => {
    if (isSelected) {
      toast.error("Виджет удалён");
      return setData((_data) => _data.filter((_id) => _id !== id));
    }
    toast.success("Виджет добавлен");
    setData((_data) => [...data, id]);
  };

  const onSave = async () => {
    await changeWidgetsFx(data).then(updateHandler);
    modalClosed();
  };

  return (
    <div className="w-96 bg-block rounded-lg flex flex-col justify-start items-center p-4">
      <h1 className="text-white text-xl mb-4 font-medium">Выберите виджеты</h1>
      {Object.keys(WidgetsIds).map((id) => {
        const widgetIdKey = id as keyof typeof WidgetsIds;
        const selected = data.includes(WidgetsIds[widgetIdKey]);
        return (
          <span
            key={id}
            onClick={() => onPressHandler(selected, WidgetsIds[widgetIdKey])}
            className={classNames(
              "w-full h-10 text-white cursor-pointer hover:bg-block-highlighted rounded-lg flex justify-center items-center mb-4",
              {
                "bg-block-highlighted/40": !selected,
                "bg-block-highlighted/80": selected,
              }
            )}
          >
            {WIDGETS_LIST[WidgetsIds[widgetIdKey]]}
          </span>
        );
      })}
      <Button loading={isLoading} onClick={onSave}>
        Обновить
      </Button>
    </div>
  );
}
