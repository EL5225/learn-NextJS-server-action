"use server";

import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { register } from "../api";

export const handleFormSubmit = async (formData: FormData) => {
  try {
    const res = await register({
      name: formData.get("name") as string,
      nik: formData.get("nik") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirm_password: formData.get("confirm_password") as string,
    });

    console.log(res);
    revalidatePath("/");
  } catch (error) {
    if (error instanceof AxiosError) {
      return console.error(error.response?.data?.message);
    }

    if (error instanceof Error) {
      return console.error(error.message);
    }
    return Promise.reject(error);
  }
};
