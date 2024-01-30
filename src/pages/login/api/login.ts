import { logged } from "@/app/stores";
import { FormValues } from "../login.settings";

export default async function (data: FormValues): Promise<string> {
  try {
    if (!data.login || !data.password) throw new Error("Данные не заполнены");
    await new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 2000);
    });
    logged({ login: "ТестЛогин" });
    return "";
  } catch (e) {
    return (e as Error).message;
  }
}