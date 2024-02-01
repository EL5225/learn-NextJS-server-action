import { FormField, TextField } from "@/components";
import { FC, ReactElement } from "react";
import { handleFormSubmit } from "@/services";

export const Landing: FC = (): ReactElement => {
  return (
    <section>
      <FormField action={handleFormSubmit} className="gap-6">
        <TextField name="name" label="Name" />
        <TextField name="nik" label="Nik" />
        <TextField name="email" label="Email" />
        <TextField name="password" label="Password" />
        <TextField name="confirm_password" label="Konfrimasi Password" />
      </FormField>
    </section>
  );
};
