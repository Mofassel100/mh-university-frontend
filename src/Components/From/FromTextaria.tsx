"use client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface TextArias {
  name: string;
  label?: string;
  rows?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
}

const FromTextAria = ({ name, value, rows, placeholder, label }: TextArias) => {
  const { control } = useFormContext();
  return (
    <>
      {label}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
            rows={rows}
          />
        )}
      />
    </>
  );
};

export default FromTextAria;
