import React, { useEffect, useState } from 'react'
import Table from '../../containers/Table/indexTable'
import Screen from '../../containers/Screen/indexScreen'
import ScreenHeader from '../../containers/ScreenHeader';
import Button from '../../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createDeparture, deleteDeparture, getDepartures, getOneDeparture } from '../../state-manager/features/departures/thunks';
import Loader from '../../components/Shared/Loader';
import CreateDeparture from './Create/index'
import ModalEdit from './Update';
import { resetDeparture } from '../../state-manager/features/departures/slice';

const HEADERS = ['Aerolinea', 'Vuelo', 'Destino', 'Programado', 'Estimado', 'Puerta', 'Estado']

const Departures = () => {
  const {departures, loading, error, success} = useSelector(state => state.departures)

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();

  const deleteElement = (id) => {
        dispatch(deleteDeparture(id))
    }

    const updateElement = (id) => {
    dispatch(getOneDeparture(id));
    setOpenEdit(true);
  }

  useEffect(() => {
    if(success){
      dispatch(resetDeparture())
    }
    dispatch(getDepartures());
  }, [success]);

  return (
    <Screen>
      <ScreenHeader title="Salidas">
        <div className='w-30'>
          <Button onClick={() => setOpen(true) }>Crear Salida</Button>
        </div>
      </ScreenHeader> 
      {loading ? (<div>
        <Loader />
      </div>): (
        <Table deleteElement={deleteElement} updateElement={updateElement} id="idDepartures" data={departures} keys={[`idAirline.nombreAirline`, 'FlightCode', 'idAirportFrom.nombreAirportFrom', 'ScheduleTimeDepartures', 'EstimatedTimeDepartures', 'idGateNumber.nombreGateNumber', 'idStatus.nombreStatus']} headers={HEADERS} />
      )}    

      {openEdit && <ModalEdit setOpen={setOpenEdit}/>}   
      {open && <CreateDeparture setOpen={setOpen}/>}    
    </Screen>
  )
}

export default Departures