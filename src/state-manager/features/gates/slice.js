import { createSlice } from "@reduxjs/toolkit";
import { createGate, deleteGate, getGate, getOneGate, updateGate } from "./thunks";

const GateSlice = createSlice({
    name: 'gate',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        gates: [],
        gate: {}
    },
    reducers: {
        resetGate: (state) => {
            state.loading = false;
            state.success = false;
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createGate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(createGate.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(createGate.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(getGate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getGate.fulfilled, (state, action) => {
            state.loading = false;
            state.gates = action.payload;
        })
        .addCase(getGate.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(updateGate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(updateGate.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(updateGate.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(deleteGate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(deleteGate.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(deleteGate.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
        .addCase(getOneGate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getOneGate.fulfilled, (state, action) => {
            state.loading = false;
            state.gate = action.payload;
        })
        .addCase(getOneGate.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
    }
});

export const {resetGate} = GateSlice.actions;
export default GateSlice;