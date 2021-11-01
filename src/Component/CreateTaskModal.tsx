import { Modal, Typography, message } from "antd";
import React, { useContext, useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import "../Style/style.css";
import { taskContext } from "./taskContext";

interface Props {
  setVisible: any;
  visible: boolean;
  taskData: any;
}
export interface SessionState {
  company: string;
  project: string;
  taskName: string;
  priority: string;
  taskDescription: string;
}

const initializeData = {
  company: "",
  project: "",
  taskName: "",
  priority: "",
  taskDescription: "",
  createdDate: new Date(),
  updateDate: "",
};
const CreateTaskModal = (props: Props) => {
  const { visible, setVisible } = props;
  // const [confirmLoading, setConfirmLoading] = useState(false);
  const { setTaskState } = useContext(taskContext);
  const [formData, setFormData] = useState<SessionState>(initializeData);

  function handleChange(event: any) {
    event.preventDefault();
    console.log(event, "formData");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  console.log(formData, "formData");

  const handleSubmitData = () => {
    if (!formData.company) {
      message.success(
        {
          content: "Please select company",
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        },
        5
      );
    } else if (!formData.project) {
      message.success(
        {
          content: "Please select project",
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        },
        5
      );
    } else if (!formData.taskName) {
      message.success(
        {
          content: "Please enter task",
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        },
        5
      );
    } else if (!formData.priority) {
      message.success(
        {
          content: "Please select priority",
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        },
        5
      );
    } else {
      let localData = localStorage.getItem("Task_Data");
      let todoData = [];
      if (localData) {
        todoData = JSON.parse(localData);
      }
      if (todoData) {
        todoData.push(formData);
      } else {
        todoData = [];
        todoData.push(formData);
      }
      console.log("todoData", todoData);
      localStorage.setItem("Task_Data", JSON.stringify(todoData));
      setVisible(false);
      setTaskState(formData);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setFormData(initializeData);
  };

  return (
    <>
      <Modal
        title="Create Task"
        visible={visible}
        onOk={handleSubmitData}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="grid">
          <div>
            <Typography> Company name *</Typography>
            <select
              defaultValue="Select Company"
              style={{ width: 200 }}
              onChange={handleChange}
              value={formData.company}
              name="company"
              className="ant-input"
            >
              <option value="0">Select Company</option>
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
            </select>
          </div>
          <div>
            <Typography> Project name *</Typography>

            <select
              defaultValue="Select Project"
              style={{ width: 200 }}
              onChange={handleChange}
              value={formData.project}
              name="project"
              className="ant-input"
            >
              <option value="0">Select Project</option>
              <option value="Project1">Project 1</option>
              <option value="Project2">Project 2</option>
            </select>
          </div>
        </div>
        <div className="grid">
          <div>
            <Typography> Task Name *</Typography>
            <input
              type="text"
              placeholder="please input name"
              name="taskName"
              className="ant-input"
              value={formData.taskName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Typography> Priority *</Typography>
            <select
              defaultValue="Select Priority"
              className="ant-input"
              style={{ width: 200 }}
              onChange={handleChange}
              value={formData.priority}
              name="priority"
            >
              <option value="0"> Select Priority</option>
              <option value="veryHigh">Very High</option>
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="veryLow">Very Low</option>
            </select>
          </div>
        </div>
        <div>
          <Typography> Task Description</Typography>
          <TextArea
            name="taskDescription"
            placeholder="Enter Task Description"
            onChange={handleChange}
            value={formData.taskDescription}
            rows={4}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateTaskModal;
