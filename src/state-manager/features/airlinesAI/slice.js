import { createSlice } from "@reduxjs/toolkit";
import { getAirlines } from "./thunks";

const airlinesSlice = createSlice({
    name: 'airlines',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        airlines: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getAirlines.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getAirlines.fulfilled, (state, action) => {
            state.loading = false;
            state.airlines = action.payload;
        })
        .addCase(getAirlines.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default airlinesSlice;