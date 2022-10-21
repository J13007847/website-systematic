// 用户登录后接口返回的用户拥有的菜单结构
import {RouteModel} from '@/model/routeAndMenu'
const authRoute: Array<RouteModel> = [
  {
    name:'系统',
    path: 'system',
    type:0,
    children:[
      {
      name:'菜单管理',
      path: "menuManage",
      type:1,
    },{
      name:'用户管理',
      path: 'userManage',
      type:1,
    },
  ]
  }
 
];
export default authRoute;