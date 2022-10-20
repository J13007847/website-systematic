import {createSlice} from '@reduxjs/toolkit'
const initialState={
  routes:[] as any
}
export const login = createSlice({
  name:'login',
  initialState,
  reducers:{
    updateMenuRoute(state){
      state.routes.push({
        path:'system',
        element:'main/system',
      })
    }
  }
})
export const updateMenuRoute=login.actions.updateMenuRoute
export default login.reducer