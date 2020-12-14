import React  from "react";
import {Modal} from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Notification from "core/components/notification/notification.component";

import {LoginStyles} from "./login.styles";

const Login = ({
    postLogin = () => null,
    visibleModal = false, 
    setIsModalVisible,
}) =>{  

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const onFinish = async fields => {
     const response = await postLogin(fields);

     if(response === true){
        Notification("success", "Logado com sucesso!");
        setIsModalVisible(false)   
     }else
        Notification("fail", "Senha incorreta!");
     
  };


    return (
        <LoginStyles> 
        <Modal
            title="Login" 
            visible={visibleModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={<div></div>}
            width={350}
        >
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{marginTop: "10px"}}
            >
                <Form.Item
                name="user"
                rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
                </Form.Item> 
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> 
                <br/><br/>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                </Form.Item>
            </Form>
        </Modal>
        </LoginStyles>
    )
}

export default Login;