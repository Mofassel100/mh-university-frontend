"use client";
import Contents from "@/Components/UI/Contents";
import SideBar from "@/Components/UI/SideBar";
import { isLoggedIn } from "@/services/auth.store";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const DeshboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setLoading(true);
  }, [router]);
  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  return (
    <Layout hasSider>
      <SideBar></SideBar>
      <Contents> {children}</Contents>
    </Layout>
  );
};

export default DeshboardLayout;
