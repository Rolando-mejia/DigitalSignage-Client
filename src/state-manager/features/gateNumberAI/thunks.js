import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getGateNumberAI = createAsyncThunk("/gateNumber", async (gatenumber, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/gateNumber");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

