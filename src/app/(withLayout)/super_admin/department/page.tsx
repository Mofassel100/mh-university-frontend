"use client";
import ActionBar from "@/Components/UI/ActionBar";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import MHTable from "@/Components/UI/MHTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.store";
import { Button, Input } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";

const ManagementDeparment = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>();
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTearm] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading } = useDepartmentsQuery({ ...query });
  console.log(data);
  const departments = data?.departments;
  const meta = data?.meta;

  const onPaginationChangeOptions = (page: number, pageSize: number) => {
    console.log("page : ", page, "pageSize : ", pageSize);
    setSize(pageSize);
    setPage(page);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",

      sorter: true,
    },

    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button type="primary" onClick={() => console.log(data)}>
              <EyeOutlined />
            </Button>
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={() => console.log(data)}
            >
              <EditOutlined />
            </Button>
            <Button type="primary" danger onClick={() => console.log(data)}>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
    setSortBy(field as string);
  };
  const paginationConfiq = {
    pageSize: 5,
    total: 10,
    pageSizeOptions: [5, 10, 15, 20, 25],
    showSizeChanger: true,
    onChange: onPaginationChangeOptions,
  };
  const ReselteFalied = () => {
    setSortBy("");
    setSearchTearm("");
    setSortOrder("");
  };

  const { role } = getUserInfo() as any;

  return (
    <div>
      <MHBreadCrumn
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />

      <ActionBar title="Department List">
        <Input
          style={{ width: "20%" }}
          type="text"
          placeholder="search...."
          size="large"
          onChange={(e) => setSearchTearm(e.target.value)}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              type="primary"
              onClick={ReselteFalied}
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <MHTable
        columns={columns}
        dataSource={departments}
        loading={isLoading}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChangeOptions}
        onTableChange={onTableChange}
        shoPagination={true}
      />
    </div>
  );
};

export default ManagementDeparment;
