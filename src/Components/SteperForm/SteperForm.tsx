"use client";
import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}
interface IStepsProps {
  steps: ISteps[];
  submintHandler: (el: any) => void;
}

const SteperForm = ({ steps, submintHandler }: IStepsProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const method = useForm();
  const { reset, handleSubmit } = method;
  const handleSubmite = (data: any) => {
    submintHandler(data);
    reset();
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(handleSubmite)}>
          <div>{steps[current].content}</div>
          <div style={{ margin: "12px" }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default SteperForm;
