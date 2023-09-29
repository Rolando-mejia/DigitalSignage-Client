import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getStatusAI = createAsyncThunk("/Status", async (status, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/status");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

