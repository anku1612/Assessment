import SideBarLayout from "../Layouts/Layout";
import CreateNewTask from "../Component/CreateNewTask";



const Inprogress = () => {
  return (
    <SideBarLayout>
      <CreateNewTask />
      {/* <Table columns={columns} /> */}
    </SideBarLayout>
  );
};

export default Inprogress;
