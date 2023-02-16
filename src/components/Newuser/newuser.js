import { Button, Card, Form, Input, Radio, Steps } from 'antd';
import React from 'react';
import { useState } from 'react';

import './newuser.scss';

const options = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
    },
];

const onChange3 = ({ target: { value } }) => {
    setValue3(value);
};


function Newuser() {
    const [value3, setValue3] = useState('Apple');
    
    return (
        <Card>
            <h3 className='card-title'>Onboard new user</h3>
            <Steps
                className='add-user-steps'
                current={1}
                items={[
                    {
                        title: 'Add user',
                    },
                    {
                        title: 'Assign roles',
                    },
                    {
                        title: 'Review & confirm',
                    },
                ]}
            />
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Role"
                    name="role"
                >
                    <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input placeholder="Enter name" />
                </Form.Item>

                <Form.Item
                    label="Remarks"
                    name="remarks"
                >
                    <Input placeholder="Add remarks" />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Add User
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default Newuser;
