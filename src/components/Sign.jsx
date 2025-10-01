
import './Sign.css'
import React from 'react';
import Imageplaceholder from '../assets/Image Placeholder.png'
import { Button, Checkbox, Form, Input } from 'antd';
const Sign = () => {

    const onFinish = values => {
        console.log('Success:', values);
        };
        const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return ( 
        <div className="sign-page">
            <div className="image-section">
                <img src={Imageplaceholder} alt="NFT Art" />
            </div>
            <div className="form-section">
                    <h1>Create Account</h1>
                    <p>Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</p>
                    
                    <Form
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        className='form-info'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        className='form-info'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        className='form-info'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirm"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                        className='form-info'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submit-btn">
                        Create account
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
 
export default Sign;