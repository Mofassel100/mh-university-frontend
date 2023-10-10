import { useSemesterRegistrationsQuery } from "@/redux/api/semesterRegistrationApi";
import FormSelectField, { SelectOptions } from "./FormSelectFields";

type SemesterRegistrationFieldProps = {
  name: string;
  label?: string;
  onChange?: (e: any) => void;
};

const SemesterRegistrationField = ({
  name,
  label,
  onChange,
}: SemesterRegistrationFieldProps) => {
  const { data, isLoading } = useSemesterRegistrationsQuery({
    limit: 100,
    page: 1,
  });
  const semesterRegistrations = data?.semesterRegistrations;
  const semesterRegistrationsOptions = semesterRegistrations?.map(
    (semester: any) => {
      return {
        label:
          semester?.academicsemester?.title +
          "-" +
          semester?.academicsemester?.year,
        value: semester?.id,
      };
    }
  );

  return (
    <FormSelectField
      name={name}
      label={label}
      options={semesterRegistrationsOptions as SelectOptions[]}
      handleChange={(e) => (onChange ? onChange(e) : undefined)}
    />
  );
};

export default SemesterRegistrationField;
