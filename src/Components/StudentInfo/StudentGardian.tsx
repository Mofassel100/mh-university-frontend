import { Col, Row } from "antd";
import React from "react";
import FromInput from "../From/fromInput";

const StudentGardian = () => {
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
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.guardian.fatherName"
            label="Father Name"
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
            name="student.guardian.fatherOccupation"
            label="Father Occupation"
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
            name="student.guardian.fatherContactNo"
            label="Father Contac tNo"
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
            type=""
            name="student.guardian.motherName"
            label="Mother Name"
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
            name="student.guardian.motherOccupation"
            label="Mothers Occupation"
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
            name="student.guardian.motherContactNo"
            label="Mother Contac No"
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
            name="student.guardian.address"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentGardian;
