import { configureStore } from "@reduxjs/toolkit";
import arrivalsSlice from "./features/arrivals/slice";
import CheckInSlice from "./features/checkin-counters/slice";
import FlightManifestSlice from "./features/flight-manifest/slice";
import DeparturesSlice from "./features/departures/slice";
import GateSlice from "./features/gates/slice";
import aircraftTypeSlice from "./features/aircraftTypeAI/slice";
import airlinesSlice from "./features/airlinesAI/slice";
import airlineCountersSlice from "./features/airlinesCounters/slice";
import airlineFlightManifestSlice from "./features/airlinesFlightManifest/slice";
import airportFromSlice from "./features/airportFromAI/slice";
import airportSystemSlice from "./features/airportSystemAI/slice";
import flightDestinationSlice from "./features/flightDestinationCounters/slice";
import flightTypeSlice from "./features/flightTypeAI/slice";
import gateNumberAISlice from "./features/gateNumberAI/slice";
import iataSlice from "./features/iataAI/slice";
import statusAISlice from "./features/statusAI/slice";
import statusflightSlice from "./features/statusCounters/slice";
import authSlice from "./features/auth/slice";

export default configureStore({
    reducer: {
        arrivals: arrivalsSlice.reducer,
        departures: DeparturesSlice.reducer,
        flightManifest: FlightManifestSlice.reducer,
        checkin: CheckInSlice.reducer,
        gate: GateSlice.reducer,
        aircraftType: aircraftTypeSlice.reducer,
        airlines: airlinesSlice.reducer,
        airline: airlineCountersSlice.reducer,
        airlinesfm: airlineFlightManifestSlice.reducer,
        airportfrom: airportFromSlice.reducer,
        airportsystem: airportSystemSlice.reducer,
        flightdestination: flightDestinationSlice.reducer,
        flighttype: flightTypeSlice.reducer,
        gatenumber: gateNumberAISlice.reducer,
        iata: iataSlice.reducer,
        status: statusAISlice.reducer,
        statusflight: statusflightSlice.reducer,
        auth: authSlice.reducer
    }
})