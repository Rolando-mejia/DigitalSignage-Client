import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getFlightType = createAsyncThunk("/FlightType", async (flighttype, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/FlightType");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

