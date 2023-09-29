import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getAirportSystem = createAsyncThunk("/AirportSystem", async (airportSystem, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/airportSystem");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

