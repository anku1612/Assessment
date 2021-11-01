import { Typography } from "antd";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import CreateTaskModal from "../Component/CreateTaskModal";
import "../Style/style.css";
const { Title } = Typography;

const CreateNewTask = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="createTaskDiv" onClick={showModal}>
        <PlusCircleOutlined style={{ marginRight: "10px" }} />
        <Title level={4} type="secondary">
          Create Task
        </Title>
      </div>
      {openModal && (
        <CreateTaskModal visible={openModal} setVisible={setOpenModal} />
      )}
    </div>
  );
};

export default CreateNewTask;
