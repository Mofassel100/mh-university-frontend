import Contents from "@/Components/UI/Contents";
import SideBar from "@/Components/UI/SideBar";
import { Layout } from "antd";

const DeshboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar></SideBar>
      <Contents> {children}</Contents>
    </Layout>
  );
};

export default DeshboardLayout;
