import { Controller, useForm } from "react-hook-form";
import { FormValues, LOGIN_FORM_RESOLVER } from "./login.settings";
import Input from "@/shared/input";
import Button from "@/shared/button";
import login from "./api/login";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, formState } = useForm({
    resolver: LOGIN_FORM_RESOLVER,
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    const errorText = await login(data);
    setIsLoading(false);
    if (errorText) {
      toast.error(errorText);
      return;
    }
    toast.success("Успешно авторизовались");
  };

  return (
    <div className="w-full h-full bg-bg flex justify-center items-center">
      <ToastContainer position="bottom-right" />
      <form
        onSubmit={handleSubmit(onSubmit, (data) => console.log("fail", data))}
        className="w-1/2 h-1/2 bg-block rounded-lg border border-white flex flex-col justify-center px-20 gap-y-4 max-w-xl"
      >
        <Controller
          name="login"
          defaultValue=""
          control={control}
          render={({ field, fieldState }) => {
            return (
              <Input
                {...field}
                name="Логин"
                placeholder="Логин"
                maxLength={30}
                containerClassnames="mb-8"
                error={fieldState.error?.message}
              />
            );
          }}
        />
        <Controller
          name="password"
          defaultValue=""
          control={control}
          render={({ field, fieldState }) => {
            return (
              <Input
                {...field}
                name="Пароль"
                placeholder="Пароль"
                maxLength={30}
                containerClassnames="mb-8"
                error={fieldState.error?.message}
              />
            );
          }}
        />
        <Button
          disabled={formState.isSubmitting}
          type="submit"
          loading={isLoading}
        >
          Авторизоваться
        </Button>
      </form>
    </div>
  );
}
