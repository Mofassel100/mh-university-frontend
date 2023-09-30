import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";

const CreateFaculty = () => {
  return (
    <div>
      <MHBreadCrumn
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-faculty",
            link: `/super_admin/manage-faculty`,
          },
        ]}
      />
      <h1>Create Faculty</h1>
    </div>
  );
};

export default CreateFaculty;
