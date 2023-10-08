"use client";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import ActionBar from "@/Components/UI/ActionBar";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import {
  useAcademicFacultyQuery,
  useUpdateAcademicFacultyMutation,
} from "@/redux/api/academic/facultyacultyApi";

import { Button, Col, Row, message } from "antd";

type IParams = {
  params: any;
};

const EditeDepartment = ({ params }: IParams) => {
  const { id } = params;
  const { data, isLoading } = useAcademicFacultyQuery(id);
  const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();
  const onSubmit = async (value: { title: string }) => {
    message.loading("Updating.....");
    try {
      const res = await updateAcademicFaculty({ id, body: value });
      if (!!res) {
        message.success("Faculty Updating SuccessFull");
      }
    } catch (err: any) {
      console.log(err.message);
      message.error(err.message);
    }
  };
  const defaulValue = {
    title: data?.title || "",
  };

  return (
    <div>
      <MHBreadCrumn
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "academic-faculty",
            link: `/admin/academic/faculty`,
          },
        ]}
      />

      <ActionBar title="Updata Departmentt"></ActionBar>
      <From submitHenler={onSubmit} defaultValues={defaulValue}>
        <div
          style={{
            border: "1px solid #d9d9d9d9",
            margin: "10px",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <p
            style={{
              fontSize: "19px",
              padding: "10px 2px",
            }}
          >
            Academic Department Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={10}>
              <FromInput
                type="text"
                name="title"
                label="Academic Department"
                size="large"
              />
            </Col>
          </Row>
        </div>
        <div style={{ margin: "10px" }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </From>
    </div>
  );
};

export default EditeDepartment;
