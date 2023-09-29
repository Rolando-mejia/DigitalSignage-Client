import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const getIata = createAsyncThunk("/iata", async (iata, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/iata");
        return data;
    }catch(err){
       
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

