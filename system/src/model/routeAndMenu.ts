import  React from 'react'
export type RouteModel ={
  name:string;
  path:string;
  type:number;
  icon?:string;
  children?:Array<RouteModel>
}
export type MenuModel= {
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuModel[],
  type?: 'group',
}