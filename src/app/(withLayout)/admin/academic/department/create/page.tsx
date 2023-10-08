"use client";
import SelectionFaild from "@/Components/From/Selectoption";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import {
  useAcademicDepartmentsQuery,
  useAddAcademicDepartmentMutation,
} from "@/redux/api/academic/department";
import { useAcademicFacultysQuery } from "@/redux/api/academic/facultyacultyApi";

import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data, isLoading } = useAcademicFacultysQuery({
    limit: 10,
    page: 1,
  });
  const academicFaculties = data?.faculties;

  const academicFacultyOption: any =
    academicFaculties &&
    academicFaculties.map((academicFac) => {
      return {
        label: academicFac?.title,
        value: academicFac?.id,
      };
    });
  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      await addAcademicDepartment(data);
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
            label: "admin",
            link: "/admin",
          },
          {
            label: "academic-department",
            link: `/admin/academic/department`,
          },
        ]}
      />
      <h1>Create Academic Department</h1>

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
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <SelectionFaild
                size="large"
                name="academicFacultyId"
                label="Academic Faculty"
                placeholder="Select Options"
                options={academicFacultyOption}
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

export default CreateAcademicDepartment;
