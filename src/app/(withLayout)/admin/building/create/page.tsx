"use client";

import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { useAddBuildingMutation } from "@/redux/api/buildingApi";
import { Button, Col, Row, message } from "antd";

const CreateBuildPage = () => {
  const [addBuilding] = useAddBuildingMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await addBuilding(data).unwrap();
      // console.log(res);
      if (res?.id) {
        message.success("Building added successfully");
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
          { label: "building", link: `/${base}/building` },
        ]}
      />
      <h1>Create Building</h1>
      <From submitHenler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </From>
    </div>
  );
};

export default CreateBuildPage;
