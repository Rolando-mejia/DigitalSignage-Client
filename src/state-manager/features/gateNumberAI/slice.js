import { createSlice } from "@reduxjs/toolkit";
import { getGateNumberAI } from "./thunks";

const gateNumberAISlice = createSlice({
    name: 'gatenumber',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        gatenumber: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getGateNumberAI.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getGateNumberAI.fulfilled, (state, action) => {
            state.loading = false;
            state.gatenumber = action.payload;
        })
        .addCase(getGateNumberAI.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default gateNumberAISlice