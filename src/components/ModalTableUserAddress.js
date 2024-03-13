import React from "react";
import {
  Modal,
  Button,
  Form,
  DatePicker,
  Checkbox,
  message,
  Table,
  Progress,
} from "antd";
import { useGetUserIpQuery } from "../service/UserAddressIp";

const ModalTableUserAddress = ({ open, setOpen, dataChange }) => {
  const { data, isLoading } = useGetUserIpQuery(dataChange?.DstIP);

  console.log(dataChange?.DstIP, "dataChange?.DstIP");
  console.log(data, "dataUserApi");

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
      title: "SrcIP",
      dataIndex: "SrcIP",
      key: "SrcIP",
    },
    // {
    //   title: "Octets",
    //   dataIndex: "Octets",
    //   key: "Octets",
    //   render: (id) => (
    //     <span className="xs:flex">
    //       <Progress percent={data?.Octets} />
    //     </span>
    //   ),
    // },
  ];

  return (
    <div>
      <Modal
        title="IP"
        width={750}
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={[
          <Button
            key="back"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setOpen(false)}
          >
            Выйти
          </Button>,
        ]}
      >
        <Table
          columns={columns}
          dataSource={data}
          rowKey="SrcIP"
          scroll={{ x: 400 }}
        />
      </Modal>
    </div>
  );
};

export default ModalTableUserAddress;
