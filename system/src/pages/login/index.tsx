import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { updateMenuRoute } from "@/store/reducers/login";
import "./index.less";
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
export default function Login() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const submitHandle = (value: any) => {
    setFormData(value);
    dispatch(updateMenuRoute());
    navigator("/");
  };
  return (
    <div className="loginBox">
      <h2>登录</h2>
      <Form {...formItemLayout} onFinish={submitHandle}>
        <Form.Item
          name="name"
          label="用户名"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input value={formData.name}></Input>
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input value={formData.password}></Input>
        </Form.Item>
        <div className="submitBtn">
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </div>
      </Form>
    </div>
  );
}
