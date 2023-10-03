"use client";
import FromDatePicker from "@/Components/From/FromDatePicker";
import FromTextAria from "@/Components/From/FromTextaria";
import SelectionFaild from "@/Components/From/Selectoption";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";

import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import UploadImage from "@/Components/UI/UploadImge";
import {
  BloodGroup,
  GenderOptions,
  ManagementDepartment,
} from "@/constants/global";
import { Button, Col, Row } from "antd";

const CreateAdmin = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        marginBottom: "40px",
        padding: "10px 15px",
      }}
    >
      <MHBreadCrumn
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "super_admin/admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>
      <From submitHenler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            Admin Information
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
                name="admin.name.firstName"
                label="First Name"
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
                name="admin.name.middleName"
                label="Middle Name"
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
                name="admin.name.lastName"
                label="Last Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
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
                name="admin.gender"
                label="Gender"
                placeholder="Select Options"
                options={GenderOptions}
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
                name="admin.managementDepartment"
                label="Department"
                placeholder="Select Options"
                options={ManagementDepartment}
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <UploadImage />
            </Col>
          </Row>
        </div>
        {/* basic informations */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            padding: "15px",
            borderRadius: "10px",
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
              <FromInput type="email" name="admin.email" label="Email" />
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
                name="admin.contactNo"
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
                name="admin.emergencyContactNo"
                label="Emergency Contact No"
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
                name="admin.designation"
                label="Designation"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FromDatePicker
                size="large"
                name="admin.dateOfBirth"
                label="Date of birth"
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
                name="admin.bloodGroup"
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
                name="admin.presentAddress"
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
                name="admin.permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit" type="primary">
          Create
        </Button>
      </From>
    </div>
  );
};

export default CreateAdmin;
