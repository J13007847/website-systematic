export const staticMenu = [{
  label: "首页",
  key: "main",
  name: "/",
  path: "/",
},
{
  label: "简历",
  key: "resume",
  name: "/resume",
  path: "/resume",
  type:0,
    children:[{
      label: "个人信息",
      key: "",
      name: "/",
      path: "/",
      type:1,
    },{
      label: "过往公司",
      key: "company",
      name: "/company",
      path: "/company",
      type:1,
    },{
      label: "项目经验",  
      key: "project",
      name: "/project",
      path: "/project",
      type:1,
    },]
},
]