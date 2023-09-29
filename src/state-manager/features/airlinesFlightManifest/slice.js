import { createSlice } from "@reduxjs/toolkit";
import { getAirlinesFlightManifest } from "./thunks";

const airlineFlightManifestSlice = createSlice({
    name: 'airlinesfm',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        airlinesfm: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getAirlinesFlightManifest.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getAirlinesFlightManifest.fulfilled, (state, action) => {
            state.loading = false;
            state.airlinesfm = action.payload;
        })
        .addCase(getAirlinesFlightManifest.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default airlineFlightManifestSlice;