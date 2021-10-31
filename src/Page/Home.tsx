import { Avatar, Typography } from "antd";
import React, {useState} from "react";
import Header from "../Component/Header";
import { UserOutlined, PlusCircleOutlined } from "@ant-design/icons";
import CreateTaskModal from "../Component/CreateTaskModal"
import '../Style/style.css'
const { Title, Paragraph } = Typography;


const RightPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [taskData , setTaskData] = useState({
        company: "",
        project: "",
        taskName: "",
        priority: "",
        taskDescription: "",
    })
    const showModal = () => {
        setOpenModal(true);
      };

      const handleTaskDetails  = () => {
        // setTaskData((prevState:any) => {
        //   return [
        //     ...prevState,
        //     {
        //       taskid: Math.random().toString(),
        //       company: taskData.company,
        //       project: taskData.project,
        //       taskName: taskData.taskName,
        //       priority: taskData.priority,
        //       taskDescription: taskData.taskDescription,
        //     },
        //   ];
        // });
      };
    
  return (
    <div style={{ width: "100%" }}>
      <div className="menuRight">
        <Typography>Albortss</Typography>
        <Avatar className="avtar" size="small" icon={<UserOutlined />} />
      </div>
      <div className="createTaskDiv" onClick={showModal}>
        <PlusCircleOutlined  style={{ marginRight: "10px"}} />
        <Title level={4} type="secondary">
          Create Task
        </Title>
      </div>
      {openModal && 
      <CreateTaskModal visible={openModal} setVisible={setOpenModal} taskData={handleTaskDetails} />
      }
      <div className="cardTracker">
        <Avatar className="avtar" size="large" icon={<UserOutlined />} />
        <Title level={2} className='title'>Welcome to Tracker</Title>
        <Paragraph className='title'>Create , View and Delete Task made easy</Paragraph>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <RightPage />
    </div>
  );
}

export default Home;
