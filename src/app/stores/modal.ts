import { createEvent, createStore } from "effector";

export type ModalProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  onAcceptTitle?: string;
  onDeniedTitle?: string;
  onAccept?: () => void;
  onDenied?: () => void;
  isConfirm?: boolean;
};

export const modalOpened = createEvent<ModalProps>();
export const modalClosed = createEvent();
export const $modal = createStore<ModalProps | null>(null)
  .on(modalOpened, (_, data) => data)
  .on(modalClosed, () => null);
