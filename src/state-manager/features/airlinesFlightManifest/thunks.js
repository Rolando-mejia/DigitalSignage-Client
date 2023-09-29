import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getAirlinesFlightManifest = createAsyncThunk("/airlinesFM", async (airline, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/airlinesFM");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

