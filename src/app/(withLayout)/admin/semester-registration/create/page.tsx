"use client";

import ACSemesterField from "@/Components/From/ACSemesterField";
import FromDatePicker from "@/Components/From/FromDatePicker";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { useAddSemesterRegistrationsMutation } from "@/redux/api/semesterRegistrationApi";
import { Button, Col, Row, message } from "antd";

const CreateSemesterRegistrationPage = () => {
  const [addSemesterRegistrations] = useAddSemesterRegistrationsMutation();
  const onSubmit = async (data: any) => {
    data.minCredit = parseInt(data?.minCredit);
    data.maxCredit = parseInt(data?.maxCredit);

    // console.log(data);
    message.loading("Creating.....");
    try {
      const res = await addSemesterRegistrations(data).unwrap();
      if (res?.id) {
        message.success("Semester registration successfully added");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <MHBreadCrumn
        items={[
          { label: `${base}`, link: `/${base}` },
          {
            label: "semester-registration",
            link: `/${base}/semester-registration`,
          },
        ]}
      />
      <h1>Create Semester Registration</h1>
      <From submitHenler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FromDatePicker
                name="startDate"
                label="Start Date"
                size="large"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromDatePicker name="endDate" label="End Date" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <ACSemesterField
                name="academicSemesterId"
                label="Academic Semester"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="minCredit" label="Min Credit" type="number" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="maxCredit" label="Max Credit" type="number" />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </From>
    </div>
  );
};

export default CreateSemesterRegistrationPage;
