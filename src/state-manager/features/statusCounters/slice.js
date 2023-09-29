import { createSlice } from "@reduxjs/toolkit";
import { getStatusFlight } from "./thunks";

const statusflightSlice = createSlice({
    name: 'statusflight',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        statusflight: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getStatusFlight.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getStatusFlight.fulfilled, (state, action) => {
            state.loading = false;
            state.statusflight = action.payload;
        })
        .addCase(getStatusFlight.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default statusflightSlice;