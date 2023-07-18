import { ConfirmDialogColorEnum } from "../enums/confirmDialogColorEnum";

export interface ConfirmDialogDataIntf {
  title: string,
  content: string,
  color: ConfirmDialogColorEnum.BLUE | ConfirmDialogColorEnum.RED | ConfirmDialogColorEnum.GREEN
}