"use client";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      await addDepartment(data);
      message.success("Department Created SuccessFull");
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
      message.error(err.message);
    }
  };
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <MHBreadCrumn
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: `/super_admin/department`,
          },
        ]}
      />
      <h1>Create Department</h1>

      <From submitHenler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9d9",
            margin: "10px",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <p
            style={{
              fontSize: "19px",
              padding: "10px 2px",
            }}
          >
            Academic Department Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={10}>
              <FromInput
                type="text"
                name="title"
                label="Academic Department"
                size="large"
              />
            </Col>
          </Row>
        </div>
        <div style={{ margin: "10px" }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </From>
    </div>
  );
};

export default CreateDepartment;
