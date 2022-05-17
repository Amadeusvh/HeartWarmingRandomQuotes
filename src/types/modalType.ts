import { MouseEventHandler, ReactChild } from "react";

export type ModalType = {
  readonly title: string;
  readonly footer: any ;
  readonly children: ReactChild;
  readonly show: boolean;
  readonly handleClose: MouseEventHandler;
};
