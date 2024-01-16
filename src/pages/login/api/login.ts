import { logged } from "@/app/stores";
import { FormValues } from "../login.settings";

export default async function (data: FormValues): Promise<boolean> {
  try {
    if (!data.login || !data.password) throw new Error('Данные не заполнены')
    await new Promise((res) => {
      setTimeout(() => {
        res(true)
      }, 2000)
    });
    logged({ login: 'ТестЛогин' })
    return true
  } catch (e) {
    alert(e)
    return false
  }
}