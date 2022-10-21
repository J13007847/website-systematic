import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { assembleMenu } from "@/utils/routerUtils";
export default function SliderMenu() {
  const navigator = useNavigate();
  const [menuItem, setMenuItem] = useState([
    {
      label: "首页",
      key: "main",
      name: "/main",
      path: "/main",
    },
  ]);
  const [activeKey, setDefaultKey] = useState(["main"]);
  const { routes } = useSelector((state: any) => state.login);

  useEffect(() => {
    let mainA = [
      {
        label: "首页",
        key: "main",
        name: "/main",
        path: "/main",
      },
    ];
    let newMenu: any = assembleMenu(routes);
    setMenuItem(mainA.concat(newMenu));
  }, [routes]);
  const onClick: MenuProps["onClick"] = (e) => {
    const { keyPath } = e;
    let path = "";

    for (let i = keyPath.length - 1; i >= 0; i--) {
      console.log(i);

      path += "/" + keyPath[i];
    }
    console.log(path);

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
