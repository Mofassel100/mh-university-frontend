import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import React from "react";

const CreateDepartment = () => {
  return (
    <div>
      <MHBreadCrumn
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: `/super_admin/department`,
          },
        ]}
      />
      <h1>Create Department</h1>
    </div>
  );
};

export default CreateDepartment;
