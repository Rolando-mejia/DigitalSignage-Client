import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Field from '../../../components/Shared/Field';
import Input from '../../../components/Shared/Input';
import { updateArrival } from '../../../state-manager/features/arrivals/thunks';
import { getAirlines } from '../../../state-manager/features/airlinesAI/thunks';
import { getAirportSystem } from '../../../state-manager/features/airportSystemAI/thunks'
import { getIata } from '../../../state-manager/features/iataAI/thunks'
import { getAircraftType } from '../../../state-manager/features/aircraftTypeAI/thunks'
import { getAirportFrom } from '../../../state-manager/features/airportFromAI/thunks'
import { getStatusAI } from '../../../state-manager/features/statusAI/thunks'
import Button from '../../../components/Shared/Button';

const ModalEdit = ({setOpen}) => {

  const { arrival: arrivalsObtain } = useSelector(state => state.arrivals)

  const [arrivals, setArrivals] = useState({
        
        idAirline: arrivalsObtain?.idAirline?.idAirline,
        idAirport: arrivalsObtain?.idAirport?.idAirportSystem,
        FlightCode: arrivalsObtain?.FlightCode,
        idIata: arrivalsObtain?.idIata?.idIata,
        idAirCraftType: arrivalsObtain?.idAirCraftType?.idAirCraftType,
        idAirportFrom: arrivalsObtain?.idAirportFrom?.idAirportFrom,
        ScheduledArrivals: arrivalsObtain?.ScheduledArrivals,
        EstimatedArrivals: arrivalsObtain?.EstimatedArrivals,
        ScheduleTimeArrival: arrivalsObtain?.ScheduleTimeArrival,
        EstimatedTimeArrival: arrivalsObtain?.EstimatedTimeArrival,
        idStatus: arrivalsObtain?.idStatus?.idStatus,
  });

  const {loading: loadingAirlines, airlines} =useSelector(state => state.airlines)
  const {loading: loadingAirportSystem, airportsystem} =useSelector(state => state.airportsystem)
  const {loading: loadingIata, iata} =useSelector(state => state.iata)
  const {loading: loadingAircraftType, aircraftType} =useSelector(state => state.aircraftType)
  const {loading: loadingAirportFrom, airportfrom} =useSelector(state => state.airportfrom)
  const {loading: loadingStatus, status} =useSelector(state => state.status)

  const dispatch = useDispatch();

  const handlerChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setArrivals((prev) => ({...prev, [name]: value}));
}

  const onSubmit = (e) => {
    dispatch(updateArrival({id: arrivalsObtain?.idArrivals, ...arrivals}))
    setOpen(false);
  }

  useEffect(() => {
    setArrivals({
        idAirline: arrivalsObtain?.idAirline?.idAirline,
        idAirport: arrivalsObtain?.idAirport?.idAirportSystem,
        FlightCode: arrivalsObtain?.FlightCode,
        idIata: arrivalsObtain?.idIata?.idIata,
        idAirCraftType: arrivalsObtain?.idAirCraftType?.idAirCraftType,
        idAirportFrom: arrivalsObtain?.idAirportFrom?.idAirportFrom,
        ScheduledArrivals: arrivalsObtain?.ScheduledArrivals,
        EstimatedArrivals: arrivalsObtain?.EstimatedArrivals,
        ScheduleTimeArrival: arrivalsObtain?.ScheduleTimeArrival,
        EstimatedTimeArrival: arrivalsObtain?.EstimatedTimeArrival,
        idStatus: arrivalsObtain?.idStatus?.idStatus,
    })
  }, [arrivalsObtain])

  useEffect(() => {
     dispatch(getAirlines()) 
  }, [])

  useEffect(() => {
     dispatch(getAirportSystem()) 
  }, [])

  useEffect(() => {
     dispatch(getIata()) 
  }, [])

  useEffect(() => {
     dispatch(getAircraftType()) 
  }, [])

  useEffect(() => {
     dispatch(getAirportFrom()) 
  }, [])

  useEffect(() => {
     dispatch(getStatusAI()) 
  }, [])

    return (
        <div id="modalOverlay" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">

            <div className="bg-slate-900	 p-8 rounded shadow-lg relative w-full max-w-7xl max-h-full overflow-y-auto">
                
                <div className="bg-slate-900 p-8 rounded shadow-lg">

    <h2 className="font-semibold mb-8 text-white text-5xl text-center">Gestionar Llegada</h2>

      <div className="mb-8">
      

        <Field label="Nombre de la Aerolinea:">
        <select value={arrivals?.idAirline} name="idAirline" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Selecciona una Aerolinea</option>
          {airlines?.map((airlines) => (
            <option value={airlines.idAirline}> {airlines.nombreAirline} </option>
          ))}
        </select>
       </Field>

       <Field label="Nombre del sistema para Aeropuerto:">
        <select value={arrivals?.idAirport} name="idAirport" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Selecciona un aeropuerto</option>
          {airportsystem?.map((airsystem) => (
            <option value={airsystem.idAirportSystem}> {airsystem.nombreAirport} </option>
          ))}
        </select>
       </Field>

        <Field label="Codigo de Vuelo:">
           <Input className="bg-neutral-500" value={arrivals.FlightCode} type="text" name="FlightCode" onChange={handlerChange} />
        </Field>

        <Field label="Codigo IATA:">
        <select value={arrivals?.idIata} name="idIata" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Selecciona codigo IATA</option>
          {iata?.map((iata) => (
            <option value={iata.idIata}> {iata.nombreIata} </option>
          ))}
        </select>
       </Field>

       <Field label="Tipo de Aeronave:">
        <select value={arrivals?.idAirCraftType} name="idAirCraftType" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Selecciona una aeronave</option>
          {aircraftType?.map((aircraftType) => (
            <option value={aircraftType.idAirCraftType}> {aircraftType.nombreAirCraftType} </option>
          ))}
        </select>
       </Field>

       <Field label="Nombre de la ciudad Proveniente:">
        <select name="idAirportFrom" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Selecciona una ciudad</option>
          {airportfrom?.map((airportfrom) => (
            <option value={airportfrom.idAirportFrom}> {airportfrom.nombreAirportFrom} </option>
          ))}
        </select>
       </Field>

        <Field label="Fecha de Llegada Programada:" >
        <Input type="date" value={arrivals.ScheduledArrivals} name="ScheduledArrivals" onChange={handlerChange} />
       </Field>

       <Field label="Fecha de Llegada Estimada:" >
        <Input type="date" value={arrivals.EstimatedArrivals} name="EstimatedArrivals" onChange={handlerChange} />
       </Field>

        <Field label="Hora Programada de Llegada">
        <Input type="time"  name="ScheduleTimeArrival" onChange={handlerChange} />
       </Field>

       <Field label="Hora Estimada de Llegada">
        <Input type="time" name="EstimatedTimeArrival" onChange={handlerChange} />
       </Field>

       <Field label="Estado del Vuelo:">
        <select value={arrivals?.idStatus} name="idStatus" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Selecciona un estado</option>
          {status?.map((status) => (
            <option value={status.idStatus}> {status.nombreStatus} </option>
          ))}
        </select>
       </Field>

      </div>
      
                  <div className='py-4'>
                      <Button
                variant="danger"
                onClick={() => setOpen(false)}
                    id="modalCloseButton"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Cerrar
                </Button>
                  </div>
                 
                 <div className='py-4'>
                    <Button
                variant="primary"
                onClick={onSubmit}
                    id="modalCloseButton"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Actualizar Llegada
                </Button>
                 </div>
                
            </div>
        </div>
        </div>

    )
}

export default ModalEdit