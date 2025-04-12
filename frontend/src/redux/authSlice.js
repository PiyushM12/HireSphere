import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    intialState:{
        loading:false
    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading= action.payload;
        }
    }
});
export const {setLoading}=authSlice.actions;

export default authSlice.reducer;