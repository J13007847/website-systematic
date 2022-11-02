import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { assembleMenu } from "@/utils/routerUtils";
import { staticMenu } from "./menuList";
export default function SliderMenu() {
  const navigator = useNavigate();
  const [menuItem, setMenuItem] = useState(staticMenu);
  const [activeKey, setDefaultKey] = useState(["main"]);
  const { routes } = useSelector((state: any) => state.login);

  useEffect(() => {
    let mainA = staticMenu;
    let newMenu: any = assembleMenu(routes);
    setMenuItem(mainA.concat(newMenu));
  }, [routes]);
  const onClick: MenuProps["onClick"] = (e) => {
    const { keyPath } = e;
    let path = "";

    for (let i = keyPath.length - 1; i >= 0; i--) {
      path += "/" + (keyPath[i] !== "main" ? keyPath[i] : "");
    }
    navigator(path);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={activeKey}
        mode="inline"
        items={menuItem}
      />
    </>
  );
}
