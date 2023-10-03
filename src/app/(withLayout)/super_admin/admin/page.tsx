"use client";
import ActionBar from "@/Components/UI/ActionBar";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { getUserInfo } from "@/services/auth.store";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <MHBreadCrumn
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />

      <ActionBar title="Manage Admin">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmin;
