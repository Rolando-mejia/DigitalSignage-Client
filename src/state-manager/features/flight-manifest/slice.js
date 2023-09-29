import { createSlice } from "@reduxjs/toolkit";
import { createFlightManifest, deleteFlightManifest, getFlightManifest, updateFlightManifest, getOneFlightMani } from "./thunks";

const FlightManifestSlice = createSlice({
    name: 'flightManifest',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        flightManifest: [],
        flightMani: {}
    },
    reducers: {
        resetFlightManifest: (state) => {
            state.loading = false;
            state.success = false;
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createFlightManifest.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(createFlightManifest.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(createFlightManifest.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(getFlightManifest.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getFlightManifest.fulfilled, (state, action) => {
            state.loading = false;
            state.flightManifest = action.payload;
        })
        .addCase(getFlightManifest.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(updateFlightManifest.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(updateFlightManifest.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(updateFlightManifest.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(deleteFlightManifest.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(deleteFlightManifest.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(deleteFlightManifest.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
        .addCase(getOneFlightMani.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getOneFlightMani.fulfilled, (state, action) => {
            state.loading = false;
            state.flightMani = action.payload;
        })
        .addCase(getOneFlightMani.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
    }
});

export const {resetFlightManifest} = FlightManifestSlice.actions;
export default FlightManifestSlice;