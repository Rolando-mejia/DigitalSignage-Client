import React from 'react'
import Layout from '../../components/Layout/indexLayout'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from '../../constants-definitions/indexConstantDefinitions'
import Home from '../Home/indexHome'
import Arrivals from '../Arrivals/indexArrivals'
import Departures from '../Departures/indexDepartures'
import FlightManifest from '../FlightManifest/indexFlightManifest'
import CheckinCounters from '../CheckinCounters/indexCheckinCounters'
import Gates from '../Gates/indexGates'

const Private = () => {
  return (
    <Layout>
        <Routes>
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.FLIGHTMANIFEST} element={<FlightManifest />} />
            <Route path={PrivateRoutes.ARRIVALS} element={<Arrivals />} />
            <Route path={PrivateRoutes.DEPARTURES} element={<Departures />} />
            <Route path={PrivateRoutes.CHECKINCOUNTERS} element={<CheckinCounters />} />
            <Route path={PrivateRoutes.GATES} element={<Gates />} />
        </Routes>
    </Layout>
  )
}

export default Private