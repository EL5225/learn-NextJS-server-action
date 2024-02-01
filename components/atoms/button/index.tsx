"use client";
import { FC, ReactElement } from "react";
import { IButtonProps } from "./interfaces";
import { cn } from "@/utils";
import { Spinner } from "..";
import { useFormStatus } from "react-dom";

export const Button: FC<IButtonProps> = ({
  children,
  className,
  spinnerSize = "sm",
  loading,
  ...props
}): ReactElement => {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        "w-40 flex items-center justify-center py-3 px-8 font-semibold rounded-md bg-blue-300 hover:bg-blue-400 duration-100 active:bg-blue-500",
        className,
        {
          "cursor-not-allowed disabled:bg-gray-200": pending || loading,
        }
      )}
      disabled={pending || loading}
      {...props}>
      {pending || loading ? (
        <Spinner size={spinnerSize} color="green" />
      ) : (
        children
      )}
    </button>
  );
};
