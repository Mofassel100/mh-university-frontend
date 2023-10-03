"use client";
import ActionBar from "@/Components/UI/ActionBar";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { getUserInfo } from "@/services/auth.store";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManagementDeparment = () => {
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

      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManagementDeparment;
