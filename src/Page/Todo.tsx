import  { useContext } from "react";
import SideBarLayout from "../Layouts/Layout";
import { taskContext } from "../Component/taskContext";
import CreateNewTask from "../Component/CreateNewTask";

const Todo = () => {
  const { taskState } = useContext(taskContext);
  console.log(taskState, "taskState");
  return (
    <SideBarLayout>
      <CreateNewTask />
     
    </SideBarLayout>
  );
};

export default Todo;
