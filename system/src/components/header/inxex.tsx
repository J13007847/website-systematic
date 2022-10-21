import React from "react";
import { Col, Row, Avatar, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import "./index.less";
export default function Header() {
  return (
    <Row>
      <Col span={6}>
        <img
          className="logo"
          alt="user"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col span={18}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <span>user</span>
        <Button type="primary" icon={<LogoutOutlined />}></Button>
      </Col>
    </Row>
  );
}
