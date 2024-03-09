import React, { useState, useEffect } from "react";
import { Table, Button, message, Modal, Divider, Badge } from "antd";

import { useGetUserAddress } from "../service/AuthService";

const TableUserAddress = () => {
  // const user = "10.10.44.50";
  // const { data, isLoading } = useGetUserAddress({ id: user });
  // const dataSource = data?.results.map(
  //   (item) =>
  //     (item = {
  //       ...item.owner,
  //       id: item.id,
  //       name: item.name,
  //       is_active: item.is_active,
  //     })
  // );
  // console.log(dataSource);

  const columns = [
    {
      title: "IP",
      dataIndex: "id",
      // key: "id",
      // width: 80,
      // align: "center",
      // defaultSortOrder: "ascend",
      // sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Pkts",
      // dataIndex: "Pkts",
      // key: "Pkts",
    },
    {
      title: "Oktets",
      dataIndex: "Oktets",
      key: "Oktets",
      render: (is_active) =>
        is_active ? (
          <span>
            <Badge status="success" />
            Активен
          </span>
        ) : (
          <span>
            <Badge status="default" />
            Не активен
          </span>
        ),
    },
    // {
    //   title: "",
    //   dataIndex: "is_active",
    //   key: "x",
    //   align: "center",
    //   render: (x, active) => (
    //     <Button
    //       type="primary"
    //       className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
    //       onClick={() => {
    //         putOrg({
    //           id: active.id,
    //           body: { is_active: !active.is_active },
    //         }).then((res) => {
    //           if (res.data) {
    //             message.success("Активность организации изменена");
    //           } else {
    //             message.error("что то пошло не так");
    //           }
    //         });
    //         console.log(active);
    //       }}
    //     >
    //       {active.is_active ? "Отключить" : "Включить"}
    //     </Button>
    //   ),
    // },
  ];

  return (
    <div className="bg-white">
      <main className="px-4 pt-4">
        <div className="mt-6">
          <Table
            columns={columns}
            // dataSource={dataSource}
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
