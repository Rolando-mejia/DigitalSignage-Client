import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getAirportFrom = createAsyncThunk("/AirportFrom", async (airportfrom, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/airportFrom");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

