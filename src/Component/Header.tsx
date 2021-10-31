import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import React from 'react';
import "antd/dist/antd.css";
import '../Style/style.css'
// import { Typography } from 'antd';
function Header() {
    const [state , setState] =  React.useState({collapsed :false})
//   state = {
//     collapsed: false,
//   };

 const toggleCollapsed = () => {
    setState({collapsed : !state.collapsed })
    // this.setState({
    //   collapsed: !this.state.collapsed,
    // });
  };


    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} className='menu' >
        Task Tracker
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={state.collapsed}
          className='menuBar'
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
           Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          TODO
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            In Progress
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
           Done
          </Menu.Item>
        </Menu>
      </div>
    );
  }

export default Header;
