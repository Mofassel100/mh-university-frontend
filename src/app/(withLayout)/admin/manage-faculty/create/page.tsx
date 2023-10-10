"use client";

import ACDepartmentField from "@/Components/From/ACDepartmentField";
import ACFacultyField from "@/Components/From/ACFacultyField";
import FromDatePicker from "@/Components/From/FromDatePicker";
import FromTextAria from "@/Components/From/FromTextaria";
import SelectionFaild from "@/Components/From/Selectoption";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import UploadImage from "@/Components/UI/UploadImge";
import { BloodGroup, GenderOptions } from "@/constants/global";
import { useAddWithFormFacultyMutation } from "@/redux/api/facultiesApi";
import { Button, Col, Row, message } from "antd";
import FormItemInput from "antd/es/form/FormItemInput";

const CreateFacultyPage = () => {
  const [addWithFormFaculty] = useAddWithFormFacultyMutation();

  const adminOnSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("File", file as Blob);
    formData.append("data", data);
    console.log("before", formData);
    message.loading("Creating...");
    try {
      // const res = await addWithFormFaculty(formData);
      if (!formData) {
        return formData;
      }
      console.log("after", formData, "data", data);
      // if (!!res) {
      //   message.success("Faculty created successfully!");
      // }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <>
      <MHBreadCrumn
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
      <From submitHenler={adminOnSubmit}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Faculty information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.name.firstName"
                label="First name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.name.middleName"
                label="Middle name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.name.lastName"
                label="Last name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                type="password"
                name="password"
                label="Password"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <SelectionFaild
                name="faculty.gender"
                label="Gender"
                options={GenderOptions}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <ACFacultyField
                name="faculty.academicFaculty"
                label="Academic Faculty"
              />
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
              <ACDepartmentField
                name="faculty.academicDepartment"
                label="Academic Department"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <UploadImage name="file" />
            </Col>
          </Row>
        </div>
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                type="email"
                name="faculty.email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.contactNo"
                label="Contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.emergencyContactNo"
                label="Emergency contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromDatePicker
                name="faculty.dateOfBirth"
                label="Date of birth"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <SelectionFaild
                name="faculty.bloodGroup"
                label="Blood group"
                options={BloodGroup}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.designation"
                label="Designation"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FromTextAria
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FromTextAria
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit">submit</Button>
      </From>
    </>
  );
};

export default CreateFacultyPage;
// {
//     "password": "123456",
//     "faculty": {
//         "name": {
//     "firstName": "Mofassel ",
//     "lastName": "Hosain",
//        "middleName":"Ishaq"
//   },
//   "dateOfBirth": "24-04-1998",
//   "gender": "male",
//   "bloodGroup": "O+",
//   "email": "Mofassel45553744@gmail.com",
//   "contactNo": "0188055660056",
//   "emergencyContactNo": "018055006006",
//   "presentAddress": "ctg",
//   "permanentAddress": "ctg",
//   "designation": "Lecturer",
//   "academicDepartment":"3f16c867-893d-4d23-8d11-9ac728c43ab9",
//   "academicFaculty":"dbf35e43-3968-49ff-9be3-a4f3a2848351"
//       }
// }
