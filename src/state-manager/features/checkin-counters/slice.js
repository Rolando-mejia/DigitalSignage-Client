import { createSlice } from "@reduxjs/toolkit";
import { createCheckIn, deleteCheckIn, getCheckIn, updateCheckIn, getOneCheck } from "./thunks";

const CheckInSlice = createSlice({
    name: 'checkin',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        checkin: [],
        check: {}
    },
    reducers: {
        resetCheck: (state) => {
            state.loading = false;
            state.success = false;
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createCheckIn.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(createCheckIn.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(createCheckIn.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(getCheckIn.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getCheckIn.fulfilled, (state, action) => {
            state.loading = false;
            state.checkin = action.payload;
        })
        .addCase(getCheckIn.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(updateCheckIn.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(updateCheckIn.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(updateCheckIn.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        .addCase(deleteCheckIn.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(deleteCheckIn.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(deleteCheckIn.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
        .addCase(getOneCheck.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getOneCheck.fulfilled, (state, action) => {
            state.loading = false;
            state.check = action.payload;
        })
        .addCase(getOneCheck.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload);
        })
    }
});

export const {resetCheck} = CheckInSlice.actions;
export default CheckInSlice;