// import React, { useEffect, useState, } from 'react';
// import { Avatar , Button } from 'antd';
// import { useHistory } from 'react-router-dom';
// import { Input } from 'antd';
// import  "../Style/login.css"
// import {UserOutlined} from '@ant-design/icons';
// export default function Login(){
//     const [userdetails, setUserDetails] = useState({UserName:'janat', Password:'Weaver'});
//     // const history= useHistory();
//     function NameChanged(e :any){
//         // setUserDetails({UserName: e.target.value})
//     }
//     function PasswordChanged(e:any){
//         setUserDetails({UserName: userdetails.UserName , Password:e.target.value})
//     }

//     useEffect(() => {
//         fetch('/login.json')
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             console.log(data, 'data');
//           });
//       }, []);
// return(
//         <div className="container-fluid">
//             <div className='header'>
//             <Avatar className='avtar' size="small" icon={<UserOutlined />} />
//             </div>
//             <form className='loginBody'>
//                 <Input type="text" placeholder="User Name" />
//                 <br/>
//                 <Input  type="password" placeholder="Password" />
//                 <br/>
//                <Button type="primary">Primary Button</Button>
//             </form>
//         </div>
//     )
// }

//     function LoginClick(){
//         for(var user of users){
//             if(user.UserName==userdetails.UserName && user.Password==userDetails.Password)
//             {
//               history.pushState('/home');
//               break;
//             }else{
//                 history.pushState('/error');
//             }
//         }

//     }

import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Avatar, Typography } from "antd";
import "antd/dist/antd.css";
import "../Style/login.css";
import { useHistory } from "react-router-dom";
const { Text} = Typography;
const Login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg , setErrorMsg] = useState(false)
  const [userData, setUserData] = useState({
    first_name : ""
  });
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setUserData(res.data);
        console.log(res.data, "data");
      });
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  console.log(userData && userData.first_name , "result ...")

  async function handlelogin() {
    let item = { userName, password };
    let result = fetch(`https://reqres.in/api/users/2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await (await result).json();
    console.log(result, "result");
    // if (userData.first_name === userName && userData.last_name === password) {
      console.log(result , "result")
      localStorage.setItem("user", JSON.stringify(result));
      history.push("/home");
      onFinish(result);
    // } 
  }

  const onFinishFailed = (errorInfo: any) => {
    setErrorMsg(true)
    console.log("Failed:", errorInfo);
  };
  console.log(userName, "userName", password, "password");
  return (
    <>
      <div className="header">
        <Avatar className="avtar" size="small" icon={<UserOutlined />} />
      </div>
      <div className="loginBody">
     
      
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
       {errorMsg &&  <Text type="danger"> Please Enter Correct UserName & password</Text>}

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              placeholder="Username"
              value={userName}
              name="userName"
              onChange={(e: any) => setUserName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              value={password}
              name="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="loginBtn"
              onClick={handlelogin}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

      </div>
    </>
  );
};

export default Login;
