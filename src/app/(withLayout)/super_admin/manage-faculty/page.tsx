"use client";
import Action from "@/Components/UI/ActionBar";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { getUserInfo } from "@/services/auth.store";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFaculty = () => {
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

      <Action title="Magage Faculty List">
        <Link href="/super_admin/manage-faculty/create">
          <Button type="primary">Create</Button>
        </Link>
      </Action>
    </div>
  );
};

export default ManageFaculty;
