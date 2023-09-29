import { createSlice } from "@reduxjs/toolkit";
import { createDeparture, deleteDeparture, getDepartures, updateDeparture, getOneDeparture } from "./thunks";

const DeparturesSlice = createSlice({
    name: 'departures',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        departures: [],
        departure: {}
    },
    reducers: {
        resetDeparture: (state) => {
            state.loading = false;
            state.success = false;
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createDeparture.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(createDeparture.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(createDeparture.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(getDepartures.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getDepartures.fulfilled, (state, action) => {
            state.loading = false;
            state.departures = action.payload;
        })
        .addCase(getDepartures.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(updateDeparture.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(updateDeparture.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(updateDeparture.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(deleteDeparture.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(deleteDeparture.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(deleteDeparture.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
        .addCase(getOneDeparture.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getOneDeparture.fulfilled, (state, action) => {
            state.loading = false;
            state.departure = action.payload;
        })
        .addCase(getOneDeparture.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
    }
});

export const {resetDeparture} = DeparturesSlice.actions;
export default DeparturesSlice;