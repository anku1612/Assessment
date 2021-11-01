
import '../Style/style.css'
import SideBarLayout from "../Layouts/Layout";
import CreateNewTask from '../Component/CreateNewTask';
import { Avatar,Typography } from 'antd';
import {
 
  UserOutlined,
 
} from '@ant-design/icons';
const {Title,Paragraph}=Typography;


function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBarLayout >
      <CreateNewTask />
      <div className="cardTracker">
        <Avatar className="avtar" size="large" icon={<UserOutlined />} />
        <Title level={2} className="title">
          Welcome to Tracker
        </Title>
        <Paragraph className="title">
          Create , View and Delete Task made easy
        </Paragraph>
      </div>
      </SideBarLayout>
    </div>
  );
}

export default Home;
