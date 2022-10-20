import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/index";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <React.Suspense fallback={<h2>loading ...</h2>}>
          <App />
        </React.Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
