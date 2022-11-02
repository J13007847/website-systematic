import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { Spin } from "antd";
import store from "@/store/index";
import App from "./App";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <React.Suspense fallback={<Spin />}>
          <ConfigProvider locale={zhCN}>
            <App />
          </ConfigProvider>
        </React.Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
