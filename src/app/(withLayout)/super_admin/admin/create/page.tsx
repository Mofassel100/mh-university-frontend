"use client";
import FromDatePicker from "@/Components/From/FromDatePicker";
import FromTextAria from "@/Components/From/FromTextaria";
import SelectionFaild from "@/Components/From/Selectoption";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";

import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import UploadImage from "@/Components/UI/UploadImge";
import { BloodGroup, GenderOptions } from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateAdmin = () => {
  const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });
  const [addAdminWithFormData] = useAddAdminWithFormDataMutation();
  const onSubmit = async (values: any) => {
    if (!values) {
      console.error("Values object is undefined or null.");
      return;
    }
    const obj = { ...values };
    const file = obj["file"];

    if (file) {
      delete obj["file"];
      // Rest of your code to process 'file' and 'values'
    } else {
      console.error("File is not present in values.");
      return;
    }
    console.log("file", file);
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    if (!formData) {
      message.loading("Creating...");
      return;
    }

    console.log("data");
    try {
      const datas = {
        data,
        file,
      };
      const bb = await addAdminWithFormData(datas);
      console.log(bb);

      message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  //@ts-ignore
  const departmens: IDepartment[] = data?.departments;

  const managementDepartmentOptions =
    departmens &&
    departmens?.map((department) => {
      return {
        label: department.title,
        value: department.id,
      };
    });
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
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>
      <From submitHenler={onSubmit} resolver={yupResolver(adminSchema)}>
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
                options={managementDepartmentOptions}
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <UploadImage name="file" />
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
