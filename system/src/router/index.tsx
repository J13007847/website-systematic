import staticRoute from "./staticRoutes";
import { AuthRoutes, lazyLoad } from "@/utils/routerUtils";
interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  element: any;
}

const routes: Array<Router> = [
  ...staticRoute,
  {
    path: "/",
    element: <AuthRoutes>{lazyLoad("layOut", "components")}</AuthRoutes>,
    children: [
      {
        path: "",
        element: lazyLoad("main", "pages"),
      },
    ],
  },
];
export default routes;
