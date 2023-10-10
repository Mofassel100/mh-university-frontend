import { useAcademicDepartmentsQuery } from "@/redux/api/academic/department";
import SelectionFaild from "./Selectoption";
import { SelectOptions } from "./FormSelectFields";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
  onChange?: (e: any) => void;
};

const ACDepartmentField = ({ name, label }: ACDepartmentFieldProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });
  const academicDepartments = data?.academicDepartment;
  const acDepartmentOptions = academicDepartments?.map((acDepartment) => {
    return {
      label: acDepartment?.title,
      value: acDepartment?.id,
    };
  });

  return (
    <SelectionFaild
      name={name}
      label={label}
      options={acDepartmentOptions as SelectOptions[]}
    />
  );
};

export default ACDepartmentField;
