import { useFacultysQuery } from "@/redux/api/facultiesApi";
import FormSelectField from "./FormSelectFields";

type FacultyProps = {
  name: string;
  label?: string;
};

const CoreFacultyField = ({ name }: FacultyProps) => {
  const { data, isLoading } = useFacultysQuery({
    limit: 100,
    page: 1,
  });
  console.log(data);
  const faculties = data?.facultys;
  console.log("faculties", faculties);
  const facultiesOptions = faculties?.map((faculty: any) => {
    console.log("facultyyyyyyyy", faculty?.id);
    //ts-ignore
    return {
      label: `${faculty?.name?.firstName} ${faculty?.name?.lastName} ${faculty?.name?.middleName}`,
      value: faculty?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label="Faculty"
      options={facultiesOptions as any}
    />
  );
};

export default CoreFacultyField;
