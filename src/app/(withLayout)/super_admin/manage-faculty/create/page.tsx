"use client";
import FromDatePicker from "@/Components/From/FromDatePicker";
import FromTextAria from "@/Components/From/FromTextaria";
import SelectionFaild from "@/Components/From/Selectoption";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import UploadImage from "@/Components/UI/UploadImge";
import { AcaDepartment, AcaFaculty, GenderOptions } from "@/constants/global";
import { Button, Col, DatePicker, Row } from "antd";

const CreateFaculty = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div
      style={{
        margin: "10px 12px",
      }}
    >
      <MHBreadCrumn
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-faculty",
            link: `/super_admin/manage-faculty`,
          },
        ]}
      />
      <h1>Create Faculty</h1>
      <From submitHenler={onSubmit}>
        <>
          <div
            style={{
              border: "1px solid #d9d9d9",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                padding: "10px",
              }}
            >
              Faculty Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <FromInput
                  type="text"
                  name="faculty.name.firstName"
                  label="First Name"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <FromInput
                  type="text"
                  name="faculty.name.middleName"
                  label="Middle Name"
                  size="large"
                />
              </Col>

              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <FromInput
                  type="text"
                  name="faculty.name.lastName"
                  label="Last Name"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <FromInput
                  type="text"
                  name="password"
                  label="Password"
                  size="large"
                />
              </Col>

              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <SelectionFaild
                  options={GenderOptions}
                  name="faculty.gender"
                  label="Gender"
                  size="large"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <SelectionFaild
                  options={AcaDepartment}
                  name="faculty.academicDepartment"
                  label="Academic Department"
                  size="large"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <SelectionFaild
                  options={AcaFaculty}
                  name="faculty.academicFaculty"
                  label="Academic Faculty"
                  size="large"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={8}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                padding: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={6}
              >
                <FromInput
                  type="email"
                  name="faculty.email"
                  label="Email"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={6}
              >
                <FromInput
                  type="number"
                  name="faculty.contactNo"
                  label="Contact No"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={6}
              >
                <FromInput
                  type="text"
                  name="faculty.emergencyContactNo"
                  label="Emergency Contact No"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={6}
              >
                <FromInput
                  type="text"
                  name="faculty.designation"
                  label="Designation"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={12}
              >
                <FromTextAria
                  rows={4}
                  name="faculty.presentAddress"
                  label="Present Address"
                  placeholder="Present Address Enter"
                />
              </Col>
              <Col
                className="gutter-row"
                style={{ marginBottom: "10px" }}
                span={12}
              >
                <FromTextAria
                  name="faculty.permanentAddress"
                  rows={4}
                  label="Permanent Address"
                />
              </Col>
            </Row>
          </div>
        </>
        <div
          style={{
            marginBottom: "20px",
            paddingLeft: "10px",
          }}
        >
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </div>
      </From>
    </div>
  );
};

export default CreateFaculty;
