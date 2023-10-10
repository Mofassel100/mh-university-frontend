import { useAcademicSemestersQuery } from "@/redux/api/academic/semesterApi";
import SelectionFaild from "./Selectoption";
import { SelectOptions } from "./FormSelectFields";

type ACFacultyFieldProps = {
  name: string;
  label: string;
};

const ACSemesterField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicSemestersQuery({
    limit: 100,
    page: 1,
  });
  const academicSemesters = data?.academicSemester;
  const acSemesterOptions = academicSemesters?.map((acSemester) => {
    return {
      label: acSemester?.title + "-" + acSemester?.year,
      value: acSemester?.id,
    };
  });

  return (
    <SelectionFaild
      name={name}
      label={label}
      options={acSemesterOptions as SelectOptions[]}
    />
  );
};

export default ACSemesterField;
