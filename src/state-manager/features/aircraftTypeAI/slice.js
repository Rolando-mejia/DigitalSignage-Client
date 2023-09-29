import { createSlice } from "@reduxjs/toolkit";
import { getAircraftType } from "./thunks";

const aircraftTypeSlice = createSlice({
    name: 'aircrafttype',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        aircraftType: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getAircraftType.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getAircraftType.fulfilled, (state, action) => {
            state.loading = false;
            state.aircraftType = action.payload;
        })
        .addCase(getAircraftType.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default aircraftTypeSlice;