import React, { useEffect, useState } from 'react'
import Table from '../../containers/Table/indexTable'
import Screen from '../../containers/Screen/indexScreen'
import axios from 'axios';
import ScreenHeader from '../../containers/ScreenHeader';
import Button from '../../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckIn, getCheckIn, getOneCheck } from '../../state-manager/features/checkin-counters/thunks';
import { digitalApi } from '../../api';
import Loader from '../../components/Shared/Loader';
import { resetCheck } from '../../state-manager/features/checkin-counters/slice';
import ModalEdit from './Update';

const HEADERS =['Numero Check-In', 'Aerolinea', 'Vuelo', 'Destino', 'Estado', 'Estado Pantalla']

const CheckIn = () => {
  const {checkin, loading, error, success} = useSelector(state => state.checkin)

  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if(success){
      dispatch(resetCheck())
    }
    dispatch(getCheckIn());
  }, [success]);

  const updateElement = (id) => {
    dispatch(getOneCheck(id));
    setOpenEdit(true);
  }


  return (
    <Screen>
      <ScreenHeader title="Check In ">
        <div className='w-30'>
          
        </div>
      </ScreenHeader> 
      {loading ? (<div>
        <Loader/>
      </div>): (
        <Table id="idCheckIn" canDelete  updateElement={updateElement} data={checkin} keys={['CheckinNumber', `idAirline.nombreAirline`, 'FlightNumber', 'idFlightDestination.nombreFlightDestination', 'idStatusFlight.nombreStatusFlight', 'StatusDisplay']} headers={HEADERS} />
      )}    
      {openEdit && <ModalEdit setOpen={setOpenEdit}/>}
    </Screen>
  )
}

export default CheckIn