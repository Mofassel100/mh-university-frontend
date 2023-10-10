"use client";

import ACDepartmentField from "@/Components/From/ACDepartmentField";
import FormSelectField, {
  SelectOptions,
} from "@/Components/From/FormSelectFields";
import OfferedCoursesField from "@/Components/From/OfferedCoursesFaild";
import From from "@/Components/From/from";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { useAddOfferedCourseMutation } from "@/redux/api/offeredCourseApi";
import { useSemesterRegistrationsQuery } from "@/redux/api/semesterRegistrationApi";
import { Button, Col, Row, message } from "antd";

const CreateOfferedCoursePage = () => {
  const [addOfferedCourse] = useAddOfferedCourseMutation();

  const { data, isLoading } = useSemesterRegistrationsQuery({
    limit: 10,
    page: 1,
  });

  const semesterRegistrations = data?.semesterRegistrations;
  console.log("semesterRes", semesterRegistrations);
  const semesterRegistrationsOptions = semesterRegistrations?.map(
    (semester) => {
      console.log(semester?.academicSemester);
      return {
        // @ts-ignore
        label: semester?.academicsemester?.title,
        value: semester?.id,
      };
    }
  );

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await addOfferedCourse(data).unwrap();
      if (res?.id) {
        message.success("Offered Course created successfully");
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
          { label: "offered-course", link: `/${base}/offered-course` },
        ]}
      />
      <h1>Create Offered Course</h1>
      <From submitHenler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                options={semesterRegistrationsOptions as SelectOptions[]}
                name="semesterRegistrationId"
                label="Semester registration"
              />
            </div>

            <div style={{ margin: "10px 0px" }}>
              <OfferedCoursesField name="courseIds" label="Courses" />
            </div>

            <div style={{ margin: "10px 0px" }}>
              <ACDepartmentField
                name="academicDepartmentId"
                label="Academic department"
              />
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

export default CreateOfferedCoursePage;
