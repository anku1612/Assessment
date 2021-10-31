/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Space, Typography, Avatar } from "antd";
import React from "react";
import Header from "../Component/Header";
import { UserOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

const columns = [
  {
    title: "Task Id",
    dataIndex: "taskid",
    key: "taskid",
  },
  {
    title: "Task Name",
    dataIndex: "taskName",
    key: "taskName",
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   dataIndex: 'action',
  //   render: (tags:any) => (
  //     <span>
  //       {tags.map((tag:any) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: "Remove",
    key: "remove",
    render: () => (
      <Space size="middle">
        <a href="#">Delete</a>
      </Space>
    ),
  },
];


const Inprogress = () => {
  // var comment = JSON.parse(localStorage.getItem(user));
  // const data = JSON.stringify(localStorage.getItem('user'))
  // console.log(data , "data")
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <div style={{ width: "100%" }}>
        <div className="menuRight">
          <Typography>Albortss</Typography>
          <Avatar className="avtar" size="small" icon={<UserOutlined />} />
        </div>
        <div className="createTaskDiv">
          <PlusCircleOutlined style={{ marginRight: "10px" }} />
          <Title level={4} type="secondary">
            Create Task
          </Title>
        </div>
        <Table
         columns={columns} 
        // dataSource={data}
         />
      </div>
    </div>
  );
};

export default Inprogress;
