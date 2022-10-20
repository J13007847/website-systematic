import { lazy } from "react";
import { Navigate } from "react-router-dom";
export const lazyLoad = (moduleName?: string, fileName = "pages") => {
  const Module = lazy(() => import(`@/${fileName}/${moduleName}/index.tsx`));
  return <Module />;
};
export const AuthRoutes = ({ children }: any) => {
  const token = !localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};
// 根据接口返回的结构组装路由表
export const assembleRoute = (routes: any) => {
  return routes.map((route: any) => {
    route.element = lazyLoad(route.element);
    return route;
  });
};
