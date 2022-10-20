import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/inxex";
import Menu from "../menu";
import Footer from "../footer";
export default function index() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Menu></Menu>
        <div className="content-container">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
