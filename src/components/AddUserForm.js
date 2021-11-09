import React from "react";
import { Form, Input, Button, Select } from "antd";

const AddUserForm = ({ onSaveUser, onCancel, defaultUserValue }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultUserValue]);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultActiveFirstOption>
        <Select.Option value="7">+7</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      onFinish={onSaveUser}
      initialValues={{
        phone: defaultUserValue ? defaultUserValue.phone : "",
        eMail: defaultUserValue ? defaultUserValue.email : "",
        name: defaultUserValue ? defaultUserValue.name : "",
      }}
    >
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Номер телефона введен неккоректно",
            min: 10,
            max: 10,
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="e-mail" name="eMail">
        <Input />
      </Form.Item>

      <Form.Item label="Ф.И.О." name="name">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {defaultUserValue ? "Изменить" : "Добавить"}
        </Button>
        <Button onClick={onCancel}>Отменить</Button>
      </Form.Item>
    </Form>
  );
};

export default AddUserForm;
