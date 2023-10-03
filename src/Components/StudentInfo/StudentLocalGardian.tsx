import { Col, Row } from "antd";
import React from "react";
import FromInput from "../From/fromInput";

const StudentLocalGardian = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "12px",
      }}
    >
      <p
        style={{
          marginBottom: "10px",
          fontSize: "18px",
        }}
      >
        Basic Gardian
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.localGuardian.name"
            label="Local Gardian Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.localGuardian.occupation"
            label="Local Guardian Occupation"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.localGuardian.contactNo"
            label="LocalGardian Contact No"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.localGuardian.address"
            label="Local Guardian Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentLocalGardian;
