"use client";
import FormSelectField, {
  SelectOptions,
} from "@/Components/From/FormSelectFields";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import { useBuildingsQuery } from "@/redux/api/buildingApi";
import { useAddRoomMutation } from "@/redux/api/roomApi";
import { Button, Col, Row, message } from "antd";
import FormItemInput from "antd/es/form/FormItemInput";

const CreateRoomPage = () => {
  const [addRoom] = useAddRoomMutation();
  const { data, isLoading } = useBuildingsQuery({
    limit: 100,
    page: 1,
  });
  const buildings = data?.buildings;
  const buildingOptions = buildings?.map((building) => {
    return {
      label: building?.title,
      value: building?.id,
    };
  });

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      // console.log(data);
      const res = await addRoom(data).unwrap();
      if (res?.id) {
        message.success("Room created successfully");
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
          { label: "room", link: `/${base}/room` },
        ]}
      />
      <h1>Create Room</h1>
      <From submitHenler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="roomNumber" label="Room No." />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="floor" label="Floor" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="buildingId"
                options={buildingOptions as SelectOptions[]}
                label="Building"
                placeholder="Select"
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

export default CreateRoomPage;
