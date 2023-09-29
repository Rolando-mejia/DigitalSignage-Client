import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getAirlines = createAsyncThunk("/Airlines", async (airlines, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/airlines");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

