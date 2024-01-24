import Button from "@/shared/button";
import Loader from "@/shared/loader";
import classNames from "classnames";
import { useState } from "react";
import PlusIcon from "./assets/plus.png";
import { WidgetsIds } from "../../widget.options";
import removeWidget from "../../api/removeWidget";

export default function WidgetLayout({
  className,
  children,
  widgetId,
}: React.PropsWithChildren<{ className: string; widgetId: WidgetsIds }>) {
  const [isLoading, setIsLoading] = useState(false);

  const onRemoveHandler = async () => {
    setIsLoading(true);
    await removeWidget(widgetId);
    setIsLoading(false);
  };

  return (
    <div className={classNames("relative p-gap", className)}>
      <Button
        onClick={onRemoveHandler}
        className="absolute right-4 top-4 w-10 h-10"
      >
        <img src={PlusIcon} alt="cross" className="rotate-45" />
      </Button>
      {isLoading && (
        <div className="absolute top-0 left-0 z-10 p-gap w-full h-full">
          <div className="w-full h-full bg-black/50 flex justify-center items-center rounded-lg">
            <Loader />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
