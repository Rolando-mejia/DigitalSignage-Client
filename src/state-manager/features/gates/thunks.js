import { createAsyncThunk } from "@reduxjs/toolkit";
import { digitalApi } from "../../../api";

export const createGate = createAsyncThunk("/Gate/create", async (gate, thunkAPI) => {
    try{
        const { data } = await digitalApi.post("/Gate/", gate);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const updateGate = createAsyncThunk("/Gate/update", async (gate, thunkAPI) => {
    try{
        const { data } = await digitalApi.put(`/Gate/${gate.id}/`, gate);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const getGate = createAsyncThunk("/Gate", async (gate, thunkAPI) => {
    try{
        const { data } = await digitalApi.get("/Gate/");
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});

export const deleteGate = createAsyncThunk("/Gate/delete", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.delete(`/Gate/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});


export const getOneGate = createAsyncThunk("/Gate/one", async (id, thunkAPI) => {
    try{
        const { data } = await digitalApi.get(`/Gate/${id}`);
        return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});