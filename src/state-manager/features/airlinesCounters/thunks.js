import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getAirlinesCounters = createAsyncThunk("/Airline", async (airline, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/Airline");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

