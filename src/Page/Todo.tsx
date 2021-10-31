/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Space, Typography, Avatar } from "antd";
import React, { useContext } from "react";
import Header from "../Component/Header";
import { UserOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { taskContext } from "../Component/taskContext";

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

const data = [
  {
    key: "1",
    taskid: "TF001",
    taskName: "John Brown",
    project: 32,
    priority: "New York No. 1 Lake Park",
    remove: ["nice", "developer"],
  },
  {
    key: "1",
    taskid: "TF002",
    taskName: "John Brown",
    project: 32,
    priority: "New York No. 1 Lake Park",
    remove: ["nice", "developer"],
  },
  {
    key: "1",
    taskid: "TF003",
    taskName: "John Brown",
    project: 32,
    priority: "New York No. 1 Lake Park",
    remove: ["nice", "developer"],
  },
];

const Todo = () => {
  const { taskState }  =useContext(taskContext); 
  console.log(taskState , "taskState")
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
        {/* {openModal && 
      <CreateTaskModal visible={openModal} setVisible={setOpenModal} taskData={handleTaskDetails} />
      } */}
        <Table columns={columns} dataSource={taskState} />
      </div>
    </div>
  );
};

export default Todo;
