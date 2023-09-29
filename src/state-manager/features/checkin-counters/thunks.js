import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const createCheckIn = createAsyncThunk("/CheckIn/create", async (checkin, thunkAPI) => {
    try{
        const { data } = await digitalApi.post("/Checkin/", checkin);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const updateCheckIn = createAsyncThunk("/CheckIn/update", async (checkin, thunkAPI) => {
    try{
        const { data } = await digitalApi.put(`/Checkin/${checkin.id}/`, checkin);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getCheckIn = createAsyncThunk("/CheckIn", async (checkin, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/Checkin/");
        return data;
    }catch(err){
        
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const deleteCheckIn = createAsyncThunk("/CheckIn/delete", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.delete(`/Checkin/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getOneCheck = createAsyncThunk("/CheckIn/one", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.get(`/Checkin/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});