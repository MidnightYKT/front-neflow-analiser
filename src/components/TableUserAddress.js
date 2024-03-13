import React, { useState, useEffect } from "react";
import { Table, Button, message, Modal, Divider, Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../service/api";
import ModalTableUserAddress from "./ModalTableUserAddress";
import { useGetUserAddressQuery } from "../service/UserAddressIp";

const TableUserAddress = () => {
  const [open, setOpen] = useState();
  const [dataChange, setDataChange] = useState();
  const { data, error, isLoading } = useGetUserAddressQuery();

  const dataSource = data?.map(
    (item) =>
      (item = {
        DstIP: item.DstIP,
        Octets: item.Octets,
        Pkts: item.Pkts,
      })
  );

  const columns = [
    {
      title: "DstIP",
      dataIndex: "DstIP",
      key: "DstIP",
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
    {
      title: "",
      dataIndex: "id",
      key: "x",
      align: "center",
      render: (id, active) => (
        <span className="xs:flex">
          <Button
            type="primary"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              setOpen(true);
              setDataChange(active);
            }}
          >
            Информация
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white">
      <main className="px-4 pt-4">
        <div className="mt-6">
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey="DstIP"
            loading={isLoading}
            scroll={{ x: 800 }}
          />
          <ModalTableUserAddress
            open={open}
            setOpen={setOpen}
            dataChange={dataChange}
          />
        </div>
      </main>
    </div>
  );
};

export default TableUserAddress;
