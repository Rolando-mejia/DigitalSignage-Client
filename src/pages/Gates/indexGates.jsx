import React, { useEffect, useState } from 'react'
import Table from '../../containers/Table/indexTable'
import Screen from '../../containers/Screen/indexScreen'
import axios from 'axios';
import ScreenHeader from '../../containers/ScreenHeader';
import Button from '../../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createGate, deleteGate, getGate, getOneGate } from '../../state-manager/features/gates/thunks';
import { digitalApi } from '../../api';
import { resetGate } from '../../state-manager/features/gates/slice';
import ModalEdit from './Edit';
import Loader from '../../components/Shared/Loader';

const HEADERS = ['Numero Puerta', 'Aerolinea', 'Vuelo', 'Destino', 'Estado', 'Estado Pantalla']
const Gate = () => {
  const {gates, loading, error, success} = useSelector(state => state.gate)

  

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();

  const deleteElement = (id) => {
    dispatch(deleteGate(id))
  }

  const updateElement = (id) => {
    dispatch(getOneGate(id));
    setOpenEdit(true);
  }

  useEffect(() => {
    if(success){
      dispatch(resetGate())
    }
    dispatch(getGate());
  }, [success]);
  return (
    <Screen>
      <ScreenHeader title="Gate ">
        
      </ScreenHeader> 
      {loading ? (<div>
        <Loader />
      </div>): (
        <Table id="idGate" canDelete updateElement={updateElement} deleteElement={deleteElement} data={gates} keys={['GateNumber', `idAirline.nombreAirline`, 'FlightNumber', 'idFlightDestination.nombreFlightDestination', 'idStatusFlight.nombreStatusFlight', 'StatusDisplay']} headers={HEADERS} />
      )}    

      {openEdit && <ModalEdit setOpen={setOpenEdit}/>} 
      {open && <CreateGate setOpen={setOpen}/>}  

    </Screen>
  )
}

export default Gate