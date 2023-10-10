"use client";
import { DatePicker, DatePickerProps } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
interface UMDatePicker {
  onChange?: (valOne: Dayjs | null, vlaTwo: string) => void;
  name: string;
  label?: string;
  rows?: number;
  value?: Dayjs;
  placeholder?: string;
  size?: "large" | "small";
}

const FromDatePicker = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  size,
}: UMDatePicker) => {
  const { control, setValue } = useFormContext();
  const haldleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };
  return (
    <>
      {label}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            onChange={haldleOnChange}
            size={size}
            style={{
              width: "100%",
            }}
            defaultValue={dayjs(field.value) || ""}
          />
        )}
      />
    </>
  );
};

export default FromDatePicker;
