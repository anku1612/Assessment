import { Layout, Menu,  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  
  HomeOutlined,
  DatabaseOutlined,ContainerOutlined,
} from '@ant-design/icons';
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const SideBarLayout: React.FC = (props) =>{
 const[collapsed,setCollapsed]=React.useState(false)

 const  toggle = () => {
    setCollapsed(!collapsed);
  };
// console.log("props",props);
 
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" style={{color:'wheat',height:"64px",textAlign:"center"}}>Task manager</div>
        
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/home"> Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DatabaseOutlined />}>
          <Link to="/todo"> TODO</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Link to="/inpogress"> In Progress</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
          <Link to="/done">Done</Link>
          </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: 10,color:"white" }}>
         
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          
          </Header>
        
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              height:"91.5vh"
            }}
          >
              
           {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
export default withRouter(SideBarLayout);

