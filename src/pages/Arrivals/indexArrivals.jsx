import React, { useEffect, useState } from 'react'
import Table from '../../containers/Table/indexTable'
import Screen from '../../containers/Screen/indexScreen'
import ScreenHeader from '../../containers/ScreenHeader';
import Button from '../../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createArrival, deleteArrival, getArrivals, getOneArrival } from '../../state-manager/features/arrivals/thunks';
import CreateArrival from './Create/index';
import Loader from '../../components/Shared/Loader';
import { resetArrival } from '../../state-manager/features/arrivals/slice';
import ModalEdit from './Update';


const HEADERS = ['Aerolinea', 'Vuelo', 'Origen', 'Programado', 'Estimado', 'Estado']

const Arrivals = () => {

  const {arrivals, loading, error, success} = useSelector(state => state.arrivals)

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();
  
  const deleteElement = (id) => {
        dispatch(deleteArrival(id))
    }

    const updateElement = (id) => {
    dispatch(getOneArrival(id));
    setOpenEdit(true);
  }
  
  useEffect(() => {
    if(success){
      dispatch(resetArrival())
    }
    dispatch(getArrivals());
  }, [success]);

  return (
    <Screen>
      <ScreenHeader title="Llegadas">
        <div className='w-30'>
          <Button onClick={() => setOpen(true) }>Crear Llegada</Button>
        </div>
      </ScreenHeader> 
      {loading ? (<div>
        <Loader />
      </div>): (
        <Table deleteElement={deleteElement} updateElement={updateElement} id="idArrivals" data={arrivals} keys={[`idAirline.nombreAirline`, 'FlightCode', 'idAirportFrom.nombreAirportFrom', 'ScheduleTimeArrival', 'EstimatedTimeArrival', 'idStatus.nombreStatus']} headers={HEADERS} />
      )}    

      {openEdit && <ModalEdit setOpen={setOpenEdit}/>} 
      {open && <CreateArrival setOpen={setOpen}/>}        
    </Screen>
  )
}

export default Arrivals