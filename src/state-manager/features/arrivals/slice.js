import { createSlice } from "@reduxjs/toolkit";
import { createArrival, deleteArrival, getArrivals, updateArrival, getOneArrival } from "./thunks";

const arrivalsSlice = createSlice({
    name: 'arrivals',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        arrivals: [],
        arrival: {}
    },
    reducers: {
        resetArrival: (state) => {
            state.loading = false;
            state.success = false;
            state.error = undefined;
        }},
    extraReducers: (builder) => {
        builder.addCase(createArrival.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(createArrival.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(createArrival.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(getArrivals.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getArrivals.fulfilled, (state, action) => {
            state.loading = false;
            state.arrivals = action.payload;
        })
        .addCase(getArrivals.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(updateArrival.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(updateArrival.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(updateArrival.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(deleteArrival.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(deleteArrival.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(deleteArrival.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
        .addCase(getOneArrival.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getOneArrival.fulfilled, (state, action) => {
            state.loading = false;
            state.arrival = action.payload;
        })
        .addCase(getOneArrival.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
    }
});

export const {resetArrival} = arrivalsSlice.actions;
export default arrivalsSlice;