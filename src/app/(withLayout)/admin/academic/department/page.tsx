"use client";
import { Button, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import dayjs from "dayjs";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import {
  useAcademicDepartmentQuery,
  useAcademicDepartmentsQuery,
  useDeleteAcademicDepartmentMutation,
} from "@/redux/api/academic/department";
import { getUserInfo } from "@/services/auth.store";
import MHBreadCrumn from "@/Components/UI/MHBreadCrumn";
import ActionBar from "@/Components/UI/ActionBar";
import MHTable from "@/Components/UI/MHTable";
const AcademicDepartmentDeptails = () => {
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
  const { data, isLoading } = useAcademicDepartmentsQuery({ ...query });
  const [deleteAcademicDepartment] = useDeleteAcademicDepartmentMutation();
  const academicDepartmentData = data?.academicDepartment;
  const meta = data?.meta;
  console.log(data);

  const onPaginationChangeOptions = (page: number, pageSize: number) => {
    console.log("page : ", page, "pageSize : ", pageSize);
    setSize(pageSize);
    setPage(page);
  };
  const DeletedHanler = async (id: string) => {
    message.loading("Deleted.....");
    try {
      const res = await deleteAcademicDepartment(id);
      if (!!res) {
        message.success(" Academic Department Deleted SuccessFull");
      }
    } catch (err: any) {
      console.log(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Faculty",
      dataIndex: "academicFaculty",
      render: function (data: any) {
        return <>{data?.title}</>;
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/academic/department/edite/${data?.id}`}>
              <Button
                style={{ margin: "0px 5px" }}
                type="primary"
                onClick={() => console.log(data)}
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              type="primary"
              danger
              onClick={() => DeletedHanler(data.id)}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
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

      <ActionBar title="Academic Department List">
        <Input
          style={{ width: "20%" }}
          type="text"
          placeholder="search...."
          size="large"
          onChange={(e) => setSearchTearm(e.target.value)}
        />
        <div>
          <Link href="/admin/academic/department/create">
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
        dataSource={academicDepartmentData}
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

export default AcademicDepartmentDeptails;
