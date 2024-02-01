import { HTMLAttributes } from "react";

export interface ITextFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
