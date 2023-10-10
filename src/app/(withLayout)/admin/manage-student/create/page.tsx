"use client";
import SteperForm from "@/Components/SteperForm/SteperForm";
import StudentBasic from "@/Components/StudentInfo/StudentBasic";
import StudentGardian from "@/Components/StudentInfo/StudentGardian";
import StudentInfo from "@/Components/StudentInfo/StudentInfo";
import StudentLocalGardian from "@/Components/StudentInfo/StudentLocalGardian";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { useAddStudentWithFormDataMutation } from "@/redux/api/studentApi";
import { message } from "antd";

const CreateStudentPage = () => {
  const [addStudentWithFormData] = useAddStudentWithFormDataMutation();
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasic />,
    },
    {
      title: "Guardian Information",
      content: <StudentGardian />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentLocalGardian />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await addStudentWithFormData(formData);
      if (!!res) {
        message.success("Student created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <div>
      <MHBreadCrumn
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1 style={{ margin: "10px 0px" }}>Create Student</h1>
      <SteperForm
        persistKey="student-create-form"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
