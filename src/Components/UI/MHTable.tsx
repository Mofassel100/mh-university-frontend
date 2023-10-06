"use client";
import { Table } from "antd";
type MHPProps = {
  columns: any;
  dataSource: any;
  loading?: boolean;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  shoPagination?: boolean;
};

const MHTable = ({
  dataSource,
  columns,
  loading = false,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  shoPagination = false,
}: MHPProps) => {
  const paginationConfiq = shoPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 15, 20, 25],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={paginationConfiq}
      onChange={onTableChange}
    />
  );
};

export default MHTable;
