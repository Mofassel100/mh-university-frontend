"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
import SideBarItems from "@/constants/sideBarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.store";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        position: "sticky",
        overflow: "hidden",
        height: "100vh",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        MH University
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SideBarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
