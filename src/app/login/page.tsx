import LoginPage from "@/Components/login/page";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "MHUMS | Login",
};
const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
