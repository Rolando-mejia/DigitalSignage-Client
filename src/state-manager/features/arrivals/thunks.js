import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const createArrival = createAsyncThunk("/arrivals/create", async (arrival, thunkAPI) => {
    try{
        const { data } = await digitalApi.post("/arrivalsInfo/", arrival);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const updateArrival = createAsyncThunk("/arrivals/update", async (arrival, thunkAPI) => {
    try{
        const { data } = await digitalApi.put(`/arrivalsInfo/${arrival.id}/`, arrival);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getArrivals = createAsyncThunk("/arrivals", async (arrival, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/arrivalsInfo");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const deleteArrival = createAsyncThunk("/arrivals/delete", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.delete(`/arrivalsInfo/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getOneArrival = createAsyncThunk("/arrivals/one", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.get(`/arrivalsInfo/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});