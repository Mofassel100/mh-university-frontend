import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { authKey } from "@/constants/lacalstorage";
import { RemoveFromlocalStrorage } from "@/utilies/local.storage";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;
const Header = () => {
  const router = useRouter();
  const logOut = () => {
    RemoveFromlocalStrorage(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" onClick={logOut} danger>
          LogOut
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "white",
      }}
    >
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
