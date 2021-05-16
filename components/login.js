import loginStyles from '../styles/login.module.css';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Form, Input, Button, Checkbox, Divider, Row, Col } from 'antd';
import { GoogleCircleFilled, FacebookFilled } from '@ant-design/icons';

import { signInWithGoogle, auth } from '../common/firebase';



export default function LoginPage() {


    // const temp = layout = {
    //     labelCol: { span: 8 },
    //     wrapperCol: { span: 16 },
    // },
    // wrapperCol = { offset: 8, span: 16 },

    const googleSignIn = () => {
        signInWithGoogle();
    }


    const onFinish = (params) => {
        console.log('finshed', params);

    }

    const onFinishFailed = (params) => {
        console.log('finshed failed', params);

    }

    const router = useRouter()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            console.log('inside login auth', userAuth);
            if (userAuth && userAuth.refreshToken) {
                router.push('dashboard')
            } else {
                router.push('/')
            }
        })
    }, [])


    return (
            <div className={loginStyles.login_container}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                    </Form.Item>

                </Form>

                <Divider />

                <Row style={{ backgroundColor: '#ffffff', padding: '20px 0', borderRadius: '20px' }}>
                    <Col span={12}><GoogleCircleFilled onClick={googleSignIn} style={{ fontSize: '32px', color: '#DB4437' }} /></Col>
                    <Col span={12}><FacebookFilled style={{ fontSize: '32px', color: '#4267B2' }} /></Col>
                </Row>

            </div>

    )

}
