import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";


export const login = createAsyncThunk("/SigIn/create", async (signin, thunkAPI) => {
    try{
        const { data } = await digitalApi.post("/auth/", signin);
        localStorage.setItem('user', JSON.stringify(data))
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const logout = createAsyncThunk('/logout', async() => {
    localStorage.removeItem('user')
});