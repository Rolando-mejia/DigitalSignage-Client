import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const createDeparture = createAsyncThunk("/Departures/create", async (departure, thunkAPI) => {
    try{
        const { data } = await digitalApi.post("/departuresInfo/", departure);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const updateDeparture = createAsyncThunk("/Departures/update", async (departure, thunkAPI) => {
    try{
        const { data } = await digitalApi.put(`/departuresInfo/${departure.id}/`, departure);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getDepartures = createAsyncThunk("/Departures", async (departure, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/departuresInfo/");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const deleteDeparture = createAsyncThunk("/Departures/delete", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.delete(`/departuresInfo/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getOneDeparture = createAsyncThunk("/Departures/one", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.get(`/departuresInfo/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});