"use client";

import { FC, ReactElement } from "react";
import { IFormFieldProps } from "./interfaces";
import { cn } from "@/utils";
import { Button } from "@/components";

export const FormField: FC<IFormFieldProps> = ({
  children,
  className,
  ...props
}): ReactElement => {
  return (
    <form
      className={cn("w-full flex flex-col p-5 items-center", className)}
      {...props}>
      {children}

      <Button className="w-full h-10" spinnerSize="sm">
        Submit
      </Button>
    </form>
  );
};
