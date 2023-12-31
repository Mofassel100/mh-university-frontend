export const GenderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },
];
export const ManagementDepartment = [
  {
    label: "HR",
    value: "HR Manager",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "",
    value: "finance",
  },
];

export const BloodGroup = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];
export const AcaDepartment = [
  {
    label: "Engeneear",
    value: "engeneear",
  },
  {
    label: "Faculty of science of Engineear",
    value: "faculty of science of engineear",
  },
];
export const AcaFaculty = [
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "softoware Engineering",
    value: "software engineering",
  },
];
export const AcaSemester = [
  {
    label: "Fall 2023",
    value: "fall2023",
  },
  {
    label: "Automn 2023",
    value: "automn2023",
  },
  {
    label: "Summer 2023",
    value: "summer2023",
  },
];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = months.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});

export const days = [
  "SATURDAY",
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
];
export const daysOptions = days.map((day: string) => {
  return {
    label: day,
    value: day,
  };
});
export const semesterRegistrationStatus = ["UPCOMING", "ONGOING", "ENDED"];
