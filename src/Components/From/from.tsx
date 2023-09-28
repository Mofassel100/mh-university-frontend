"use client";
import { ReactElement, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
type fromConfig = {
  defaultValues?: Record<string, any>;
};
type fromProps = {
  children?: ReactElement | ReactNode;
  submitHenler: SubmitHandler<any>;
} & fromConfig;
const From = ({ children, submitHenler, defaultValues }: fromProps) => {
  const fromConfig: fromConfig = {};
  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;

  const methods = useForm<fromProps>(fromConfig);
  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHenler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default From;
