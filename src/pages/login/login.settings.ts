import { Resolver } from "react-hook-form";

export type FormValues = {
  login: string;
  password: string;
};

export const LOGIN_FORM_RESOLVER: Resolver<FormValues> = async (
  values: FormValues
) => {
  if (!values.login || !values.password) {
    return {
      values: {},
      errors: {
        login: !values.login
          ? {
              type: "required",
              message: "Это поле обязательно для заполнения.",
            }
          : undefined,
        password: !values.password
          ? {
              type: "required",
              message: "Это поле обязательно для заполнения.",
            }
          : undefined,
      },
    };
  }
  return {
    values,
    errors: {}
  };
};
