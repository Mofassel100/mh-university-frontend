import { Col, Row } from "antd";
import React from "react";
import FromInput from "../From/fromInput";
import FromDatePicker from "../From/FromDatePicker";
import SelectionFaild from "../From/Selectoption";
import { BloodGroup } from "@/constants/global";
import FromTextAria from "../From/FromTextaria";

const StudentBasic = () => {
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
        Basic Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput type="email" name="student.email" label="Email" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="number"
            name="student.contactNo"
            label="Contact No"
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
            type="number"
            name="student.emergencyContactNo"
            label="Emergency Contact No"
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromDatePicker
            size="large"
            name="student.dateOfBirth"
            label="Date of birth"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <SelectionFaild
            size="large"
            name="student.bloodGroup"
            label="Blood Group"
            placeholder="Select Blood"
            options={BloodGroup}
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromTextAria
            rows={4}
            name="student.presentAddress"
            label="Present Address"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromTextAria
            rows={4}
            name="student.permanentAddress"
            label="Permanent Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasic;
