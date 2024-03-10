import React, { useState, useEffect } from "react";
import { Table, Button, message, Modal, Divider, Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../service/api";

const TableUserAddress = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  console.log(todoList);

  const dataSource = todoList?.map(
    (item) =>
      (item = {
        DstIP: item.DstIP,
        Octets: item.Octets,
        Pkts: item.Pkts,
      })
  );
  console.log(dataSource);

  const columns = [
    {
      title: "DstIP",
      dataIndex: "DstIP",
      key: "DstIP",
      // width: 80,
      // align: "center",
      // defaultSortOrder: "ascend",
      // sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Octets",
      dataIndex: "Octets",
      key: "Octets",
    },
    {
      title: "Pkts",
      dataIndex: "Pkts",
      key: "Pkts",
    },
  ];

  return (
    <div className="bg-white">
      <main className="px-4 pt-4">
        <div className="mt-6">
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey="id"
            // loading={isLoading}
            scroll={{ x: 800 }}
          />
        </div>
      </main>
    </div>
  );
};

export default TableUserAddress;
