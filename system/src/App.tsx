import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { cloneDeep } from "lodash-es";
import { useSelector } from "react-redux";
import route from "@/router/index";
import { assembleRoute } from "@/utils/routerUtils";
function App() {
  const [allRoute, setAllRoute] = useState(route);
  const { routes } = useSelector((state: any) => state.login);
  const elements = useRoutes(allRoute);
  useEffect(() => {
    if (routes && routes.length) {
      const newR = assembleRoute(cloneDeep(routes));
      const newAll = cloneDeep(allRoute);
      newAll[newAll.length - 1].children =
        newAll[newAll.length - 1].children?.concat(newR);
      console.log("newAll", newAll);

      setAllRoute(newAll);
    }
  }, [routes]);
  return <div className="height-all">{elements}</div>;
}

export default App;
