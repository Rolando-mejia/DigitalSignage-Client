import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const createFlightManifest = createAsyncThunk("/FlightManifest/create", async (flightmanifest, thunkAPI) => {
    try{
        const { data } = await digitalApi.post("/flightManifest/", flightmanifest);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const updateFlightManifest = createAsyncThunk("/FlightManifest/update", async (flightmanifest, thunkAPI) => {
    
    try{
        const { data } = await digitalApi.put(`/flightManifest/${flightmanifest.id}/`, flightmanifest);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getFlightManifest = createAsyncThunk("/FlightManifest", async (flightmanifest, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/flightManifest/");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const deleteFlightManifest = createAsyncThunk("/FlightManifest/delete", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.delete(`/flightManifest/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getOneFlightMani = createAsyncThunk("/FlightManifest/one", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.get(`/flightManifest/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});