import { HTMLAttributes } from "react";
import { TSpinnerSize } from "../spinner/types";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  spinnerSize?: TSpinnerSize;
  disabled?: boolean;
}
