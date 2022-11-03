import React, { useState } from "react";
import { Form, Input, Radio, Button, Modal } from "antd";
import PreviewResume from "./components/previewResume";
import AddTags from "@/components/addTags";
import "./index.less";
export default function Resume() {
  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 10 },
  };
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: 0,
    desc: "",
    skills: [],
  });
  const [modal, setModal] = useState({
    show: false,
    title: "个人信息的预览",
  });
  const formValChange = (event: any) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandle = (value: any) => {
    setFormData(value);
  };
  const modelShowHandle = () => {
    setModal((prev) => ({ ...prev, show: !modal.show }));
  };
  const skillsChange = (data: string[] | number, type: string) => {
    let tagList: any = type === "row" ? data : [...formData.skills];
    if (type === "index") {
      tagList.splice(data, 1);
    }
    setFormData((prev: any) => ({ ...prev, skills: tagList }));
  };
  return (
    <div className="resumeIndex mainBox">
      <h2>个人信息</h2>
      <Form {...formItemLayout} onFinish={submitHandle}>
        <Form.Item label="姓名" name="name">
          <Input value={formData.name} placeholder="请输入姓名"></Input>
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input
            type="number"
            value={formData.age}
            placeholder="请输入年龄"
          ></Input>
        </Form.Item>
        <Form.Item label="性别" name="sex">
          <Radio.Group value={formData.sex} name="sex" onChange={formValChange}>
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="技能描述" name="desc" rules={[{ required: true }]}>
          <Input.TextArea
            value={formData.desc}
            showCount
            maxLength={500}
            rows={8}
            placeholder="请输入技能描述"
          ></Input.TextArea>
        </Form.Item>
        <Form.Item label="技能标签" name="skills" rules={[{ required: true }]}>
          <AddTags tagList={formData.skills} tagChange={skillsChange}></AddTags>
        </Form.Item>
        <div className="tc mt2">
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "20px" }}
          >
            保存
          </Button>
          <Button onClick={modelShowHandle}>预览</Button>
        </div>
      </Form>
      <Modal title={modal.title} open={modal.show} onCancel={modelShowHandle}>
        <PreviewResume></PreviewResume>
      </Modal>
    </div>
  );
}
