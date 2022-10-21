import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderCom from "../header/inxex";
import Menu from "../menu";
import FooterCom from "../footer";
import "./index.less";
const { Header, Footer, Sider, Content } = Layout;
export default function index() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#fff" }}>
        <HeaderCom></HeaderCom>
      </Header>
      <Layout>
        <Sider theme="light" style={{ marginRight: "4px" }}>
          <Menu></Menu>
        </Sider>
        <Content
          style={{
            height: "calc(100vh - 140px)",
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer>
        <FooterCom></FooterCom>
      </Footer>
    </Layout>
  );
}
