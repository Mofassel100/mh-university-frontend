"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../assats/image/login-img.png";
import Image from "next/image";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { authUserInfo } from "@/services/auth.store";
import { useRouter } from "next/navigation";

type FromValues = {
  id: String;
  password: String;
};
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FromValues> = async (data: any) => {
    console.log("login", data);
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in Successfully !");
      }
      authUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col sm={12} md={12} lg={12}>
          <Image src={loginImage} width={500} alt="login img" />
        </Col>
        <Col sm={12} md={12} lg={12}>
          <h1
            style={{
              margin: "15px 0",
            }}
          >
            First Login your account
          </h1>
          <div>
            <From submitHenler={onSubmit}>
              <div>
                <FromInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FromInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </From>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
