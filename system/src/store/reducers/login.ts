import {createSlice} from '@reduxjs/toolkit'
import  authRoute from '@/router/authRoute'
const authSessionRoute = sessionStorage.getItem('authRoute') || '';

const initialState={
  routes:authSessionRoute&&JSON.parse(authSessionRoute) || [],
}
export const login = createSlice({
  name:'login',
  initialState,
  reducers:{
    updateMenuRoute(state){
      state.routes=authRoute
      sessionStorage.setItem('authRoute',JSON.stringify(state.routes))
    },
  }
})
export const updateMenuRoute=login.actions.updateMenuRoute
export default login.reducer