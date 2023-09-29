import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getAircraftType = createAsyncThunk("/aircraftType", async (aircrafttype, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/aircraftType");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

