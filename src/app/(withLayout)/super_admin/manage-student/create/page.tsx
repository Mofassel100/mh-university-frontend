"use client";
import SteperForm from "@/Components/SteperForm/SteperForm";
import StudentBasic from "@/Components/StudentInfo/StudentBasic";
import StudentGardian from "@/Components/StudentInfo/StudentGardian";
import StudentInfo from "@/Components/StudentInfo/StudentInfo";
import StudentLocalGardian from "@/Components/StudentInfo/StudentLocalGardian";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import React from "react";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Info",
      content: <StudentInfo />,
    },
    {
      title: "Student Basic Info",
      content: <StudentBasic />,
    },
    {
      title: "Gardian Info",
      content: <StudentGardian />,
    },
    {
      title: "Local Gardian Info",
      content: <StudentLocalGardian />,
    },
  ];
  const handlerSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <MHBreadCrumn
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-student",
            link: `/super_admin/manage-student`,
          },
        ]}
      />
      <h1>Create Student</h1>
      <SteperForm
        submintHandler={(value) => handlerSubmit(value)}
        steps={steps}
      ></SteperForm>
    </div>
  );
};

export default CreateStudent;
