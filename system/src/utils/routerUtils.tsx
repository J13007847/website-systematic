import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { MenuModel, RouteModel } from "@/model/routeAndMenu";
export const lazyLoad = (moduleName?: string, fileName = "pages") => {
  const Module = lazy(() => import(`@/${fileName}/${moduleName}/index.tsx`));
  return <Module />;
};
export const AuthRoutes = ({ children }: any) => {
  const token = !localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};
// 根据接口返回的结构组装菜单表

export const assembleMenu = (routes: Array<RouteModel>) => {
  return routes.map((route: RouteModel) => {
    const newR: MenuModel = {
      label: route.name || "",
      key: route.path || "",
      icon: route.icon || "",
    };
    if (route.children && route.children.length)
      newR["children"] = assembleMenu(route.children || []);
    if (route.type === 0) newR["type"] = undefined;
    return newR;
  });
};
// 根据接口返回的结构组装路由表
export const assembleRoute = (
  routes: Array<RouteModel>,
  parentModel?: string
) => {
  return routes.map((route: RouteModel) => {
    const newR: any = {
      path: route.path,
      element: lazyLoad(
        parentModel ? parentModel + "/" + route.path : route.path
      ),
      children: route.children ? assembleRoute(route.children, route.name) : [],
    };
    return newR;
  });
};
