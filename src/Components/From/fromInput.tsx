"use client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  id?: string;
  value?: string | string[] | undefined;
  size?: "large" | "small";
  validation?: object;
  placeholder?: string;
  label?: string;
}

const FromInput = ({
  type,
  name,
  id,
  value,
  placeholder,
  validation,
  size,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              placeholder={placeholder}
              size={size}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              placeholder={placeholder}
              size={size}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FromInput;
