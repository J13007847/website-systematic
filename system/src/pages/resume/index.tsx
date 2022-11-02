import React, { useState } from "react";
import { Form, Input, Radio, Tag, Button, message, Modal } from "antd";
import PreviewResume from "./components/previewResume";
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
  const [skillsTxt, setSkillsTxt] = useState("");
  const [skillsTxtShow, setSkillsTxtShow] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    title: "个人信息的预览",
  });
  const inputChange = (event: any) => {
    const { value } = event.target;
    setSkillsTxt(value);
  };
  const formValChange = (event: any) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const enterHandle = () => {
    if (!skillsTxt) return;
    let oldSkills: any = [...formData.skills];
    if (oldSkills.includes(skillsTxt)) {
      message.warning("技能名称重复");
      return;
    }

    oldSkills.push(skillsTxt);
    setFormData((prev) => ({ ...prev, skills: oldSkills }));
    setSkillsTxtShow(!skillsTxtShow);
    setSkillsTxt("");
  };
  const submitHandle = (value: any) => {
    setFormData(value);
  };
  const modelShowHandle = () => {
    setModal((prev) => ({ ...prev, show: !modal.show }));
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
          {formData.skills.map((item) => (
            <Tag color="magenta" key={item} style={{ marginBottom: "6px" }}>
              {item}
            </Tag>
          ))}

          {skillsTxtShow && (
            <Input
              value={skillsTxt}
              onChange={inputChange}
              placeholder="回车/Enter键添加技能(最多20个字)"
              maxLength={20}
              onPressEnter={enterHandle}
              allowClear
              style={{ width: "260px", margin: "0 4px" }}
            ></Input>
          )}
          <Button
            type="primary"
            onClick={() => setSkillsTxtShow(!skillsTxtShow)}
          >
            {skillsTxtShow ? "取消" : "添加"}
          </Button>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "20px" }}
        >
          保存
        </Button>
        <Button type="text" onClick={modelShowHandle}>
          预览
        </Button>
      </Form>
      <Modal title={modal.title} open={modal.show} onCancel={modelShowHandle}>
        <PreviewResume></PreviewResume>
      </Modal>
    </div>
  );
}
