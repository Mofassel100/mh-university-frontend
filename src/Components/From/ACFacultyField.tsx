import { useAcademicFacultysQuery } from "@/redux/api/academic/facultyacultyApi";
import SelectionFaild from "./Selectoption";
import { SelectOptions } from "./FormSelectFields";

type ACFacultyFieldProps = {
  name: string;
  label: string;
};

const ACFacultyField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicFacultysQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.faculties;
  const acFacultyOptions = academicFaculties?.map((acFaculty) => {
    return {
      label: acFaculty?.title,
      value: acFaculty?.id,
    };
  });

  return (
    <SelectionFaild
      name={name}
      label={label}
      options={acFacultyOptions as SelectOptions[]}
    />
  );
};

export default ACFacultyField;
