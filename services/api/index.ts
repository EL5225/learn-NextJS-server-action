import { api } from "@/services";
import { TRegisterRequest } from "./types";

export const register = async (payload: TRegisterRequest) => {
  const { data } = await api.post("/auth/register", payload);
  return data;
};
