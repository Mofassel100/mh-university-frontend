"use client";
import From from "@/Components/From/from";
import FromInput from "@/Components/From/fromInput";
import { Button, Col, Row, message } from "antd";

const ResPassChange = () => {
  const onSubmit = (data: any) => {
    console.log(data);
    message.success("change Password Successfully");
  };
  return (
    <div>
      <div
        style={{
          height: "500px",
          width: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <From submitHenler={onSubmit}>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              margin: "15px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                margin: "12px 0",
              }}
            >
              Resset Password
            </p>
            <Row
              justify="center"
              align="middle"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <div>
                <Col className="gutter-row" span={24}>
                  <FromInput
                    type="password"
                    name="oldPassword"
                    label="Old Password"
                    size="large"
                  ></FromInput>
                </Col>
              </div>
              <br />
              <div>
                <Col className="gutter-row" span={24}>
                  <FromInput
                    type="password"
                    name="newPassword"
                    label="New Password"
                    size="large"
                  ></FromInput>
                </Col>
              </div>
            </Row>
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              Change password
            </Button>
          </div>
        </From>
      </div>
    </div>
  );
};

export default ResPassChange;
