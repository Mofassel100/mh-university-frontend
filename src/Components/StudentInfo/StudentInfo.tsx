"use client";
import { Col, Row } from "antd";
import React from "react";
import FromInput from "../From/fromInput";
import SelectionFaild from "../From/Selectoption";
import { AcaDepartment, AcaFaculty, AcaSemester } from "@/constants/global";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        padding: "15px",
        marginTop: "12px",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          marginBottom: "10px",
          fontSize: "18px",
        }}
      >
        Student Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.firstName"
            label="First Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.middleName"
            label="Middle Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.lastName"
            label="Last Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput type="password" name="password" label="Password" />
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
            name="student.academicDepartment"
            label="Academic Department"
            placeholder="Select Options"
            options={AcaDepartment}
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
            name="student.academicFaculty"
            label="Academic Faculty"
            placeholder="Select Options"
            options={AcaFaculty}
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
            name="student.academicSemester"
            label="Academic Semester"
            placeholder="Select Options"
            options={AcaSemester}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
