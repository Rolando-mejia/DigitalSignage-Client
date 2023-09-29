import { createSlice } from "@reduxjs/toolkit";
import { getStatusAI } from "./thunks";

const statusAISlice = createSlice({
    name: 'status',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        status: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getStatusAI.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getStatusAI.fulfilled, (state, action) => {
            state.loading = false;
            state.status = action.payload;
        })
        .addCase(getStatusAI.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default statusAISlice;