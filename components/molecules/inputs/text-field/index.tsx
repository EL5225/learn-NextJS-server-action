import { FC, ReactElement } from "react";
import { ITextFieldProps } from "./interfaces";
import { cn } from "@/utils";

export const TextField: FC<ITextFieldProps> = ({
  name,
  label,
  className,
  ...props
}): ReactElement => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className={cn(
          "w-full border-2 border-black rounded-md py-1 px-3 text-sm",
          className
        )}
        type="text"
      />
    </div>
  );
};
