import { lazyLoad } from "@/utils/routerUtils";
const router = [
  {
    path: "/login",
    element: lazyLoad("login"),
  },
  {
    path: "*",
    element: lazyLoad("404"),
  },
];
export default router;
