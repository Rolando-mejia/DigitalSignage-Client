import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getStatusFlight = createAsyncThunk("/StatusFlight", async (statusflight, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/StatusFlight");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

