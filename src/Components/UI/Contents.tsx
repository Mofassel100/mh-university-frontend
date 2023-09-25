"use client";
import { Layout } from "antd";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      {children}
    </Content>
  );
};

export default Contents;
