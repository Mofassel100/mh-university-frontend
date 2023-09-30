import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const CreateStudent = () => {
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
    </div>
  );
};

export default CreateStudent;
