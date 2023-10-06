"use client";
import React, { useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import {
  getFromlocalStrorage,
  setTolocalStrorage,
} from "@/utilies/local.storage";
import { useRouter } from "next/navigation";
interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}
interface IStepsProps {
  steps: ISteps[];
  submintHandler: (el: any) => void;
  navigateLink?: string;
}

const SteperForm = ({ steps, submintHandler, navigateLink }: IStepsProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromlocalStrorage("step")
      ? Number(JSON.parse(getFromlocalStrorage("step") as string))
      : 0
  );

  useEffect(() => {
    setTolocalStrorage("step", JSON.stringify({ step: current }));
  }, [current]);
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
    setTolocalStrorage("step", JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink);
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
