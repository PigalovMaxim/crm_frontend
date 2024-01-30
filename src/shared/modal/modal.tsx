import { useUnit } from "effector-react";
import Button from "../button";
import { $modal } from "@/app/stores";
import { ModalProps, modalClosed } from "@/app/stores/modal";

export default function Modal() {
  const props: ModalProps | null = useUnit($modal);
  if (!props) return null;
  const {
    title,
    children,
    isConfirm,
    onAccept,
    onAcceptTitle,
    onDenied,
    onDeniedTitle,
    subtitle,
  } = props;
  const onAcceptHandler = () => {
    onAccept?.();
    modalClosed();
  };
  const onDeniedHandler = () => {
    onDenied?.();
    modalClosed();
  };
  return (
    <div className="flex justify-center items-center w-full h-full bg-black/60 absolute top-0 left-0 z-40">
      {children ? (
        children
      ) : (
        <div className="w-96 h-96 bg-block rounded-lg flex flex-col justify-start items-center p-4 pt-8">
          <h1 className="text-white font-semibold text-lg">{title}</h1>
          <h2 className="text-white/80 font-semibold text-base mt-4">
            {subtitle}
          </h2>
          <Button
            onClick={onAcceptHandler}
            className="uppercase mt-auto w-full bg-c-green hover:bg-c-green-light h-10 rounded-lg text-white transition-colors"
          >
            {onAcceptTitle || "ОК"}
          </Button>
          {isConfirm && (
            <Button
              onClick={onDeniedHandler}
              className="uppercase mt-4 w-full bg-c-red hover:bg-c-red-light h-10 rounded-lg text-white transition-colors"
            >
              {onDeniedTitle || "Нет"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
