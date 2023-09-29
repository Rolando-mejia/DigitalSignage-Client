import { createSlice } from "@reduxjs/toolkit";
import { getIata } from "./thunks";

const iataSlice = createSlice({
    name: 'iata',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        iata: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getIata.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getIata.fulfilled, (state, action) => {
            state.loading = false;
            state.iata = action.payload;
        })
        .addCase(getIata.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default iataSlice;