import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getFlightDestinations = createAsyncThunk("/FlightDestination", async (flightdestination, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/FlightDestination");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

