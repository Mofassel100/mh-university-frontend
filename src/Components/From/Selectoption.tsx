"use client";
import { Select } from "antd";
type SelectOptions = {
  lavel?: string;
  value: string;
};
import { useFormContext, Controller } from "react-hook-form";
type SelectFaildOptions = {
  options: SelectOptions[];
  name: string;
  value?: string | string[] | undefined;
  size?: "large" | "small";
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};

const SelectionFaild = ({
  name,
  value,
  placeholder,
  options,
  size,
  label,
  defaultValue,
}: SelectFaildOptions) => {
  const { control } = useFormContext();
  return (
    <>
      {label}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            size={size}
            value={value}
            onChange={onChange}
            options={options}
            style={{
              width: "100%",
              color: "black",
            }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default SelectionFaild;
