import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Field from '../../../components/Shared/Field';
import Input from '../../../components/Shared/Input';
import { updateFlightManifest } from '../../../state-manager/features/flight-manifest/thunks';
import { getAirlinesFlightManifest } from '../../../state-manager/features/airlinesFlightManifest/thunks';
import Button from '../../../components/Shared/Button';


const ModalEdit = ({setOpen}) => {

  const { flightMani: flightmanifestObtain } = useSelector(state => state.flightManifest)

  const [flightManifest, setFlightManifest] = useState({
        
        idAirline: flightmanifestObtain?.idAirline?.idAirline,
        OperatorCode: flightmanifestObtain?.OperatorCode,
        Date: flightmanifestObtain?.Date,
        Matricula: flightmanifestObtain?.Matricula,
        numeroVuelo: flightmanifestObtain?.numeroVuelo,
        tipoAeroNave: flightmanifestObtain?.tipoAeroNave,
        llegadas: flightmanifestObtain?.llegadas,
        salidas: flightmanifestObtain?.salidas,
        destino: flightmanifestObtain?.destino,
        codigoATO: flightmanifestObtain?.codigoATO,
        nombreATO: flightmanifestObtain?.nombreATO,
        totalPax: flightmanifestObtain?.totalPax,
        paxExen: flightmanifestObtain?.paxExen,
        inf: flightmanifestObtain?.inf,
        collect: flightmanifestObtain?.collect,
        terceraEdad: flightmanifestObtain?.terceraEdad,
        paxCargados: flightmanifestObtain?.paxCargados,
        comentarios: flightmanifestObtain?.comentarios,
  });

  const {loading, airlinesfm} =useSelector(state => state.airlinesfm)

  const dispatch = useDispatch();

   
  const handlerChange = (e) => {
    const {name, value} = e.target;
    setFlightManifest((prev) => ({...prev, [name]: value}));
}



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFlightManifest({id: flightmanifestObtain?.idFlightManifest, ...flightManifest}))
    setOpen(false);
  }

  useEffect(() => {
    setFlightManifest({
        idAirline: flightmanifestObtain?.idAirline?.idAirline,
        OperatorCode: flightmanifestObtain?.OperatorCode,
        Date: flightmanifestObtain?.Date,
        Matricula: flightmanifestObtain?.Matricula,
        numeroVuelo: flightmanifestObtain?.numeroVuelo,
        tipoAeroNave: flightmanifestObtain?.tipoAeroNave,
        llegadas: flightmanifestObtain?.llegadas,
        salidas: flightmanifestObtain?.salidas,
        destino: flightmanifestObtain?.destino,
        codigoATO: flightmanifestObtain?.codigoATO,
        nombreATO: flightmanifestObtain?.nombreATO,
        totalPax: flightmanifestObtain?.totalPax,
        paxExen: flightmanifestObtain?.paxExen,
        inf: flightmanifestObtain?.inf,
        collect: flightmanifestObtain?.collect,
        terceraEdad: flightmanifestObtain?.terceraEdad,
        paxCargados: flightmanifestObtain?.paxCargados,
        comentarios: flightmanifestObtain?.comentarios,
    })
  }, [flightmanifestObtain])

  useEffect(() => {
     dispatch(getAirlinesFlightManifest()) 
  }, [])

  

    return (
        <div id="modalOverlay" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">

            <div className="bg-slate-900	 p-8 rounded shadow-lg relative w-full max-w-7xl max-h-full overflow-y-auto">
                
                <div className="bg-slate-900 p-8 rounded shadow-lg">

    <h2 className="font-semibold mb-8 text-white text-5xl text-center">Gestionar Manifiesto de Vuelo</h2>

      <div className="mb-8">
      

        <Field label="Nombre de la Aerolinea:">
        <select  value={flightManifest?.idAirline} name="idAirline" onChange={handlerChange} className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Selecciona una Aerolinea</option>
          {airlinesfm?.map((airline) => (
            <option key={airline.idAirline} value={airline.idAirline}> {airline.nombreAirline} </option>
          ))}
        </select>
       </Field>

        <Field label="Codigo del Operador:">
           <Input className="bg-red" type="text" value={flightManifest.OperatorCode} name="OperatorCode" onChange={handlerChange} />
        </Field>

        <Field label="Fecha de Guardado:" >
        <Input type="date" name="Date" value={flightManifest.Date} onChange={handlerChange} />
       </Field>

       <Field label="Matricula de Aeronave:">
           <Input type="text" name="Matricula" value={flightManifest.Matricula} onChange={handlerChange} />
        </Field>

        <Field label="Numero de Vuelo:">
           <Input type="text" name="numeroVuelo" value={flightManifest.numeroVuelo} onChange={handlerChange} />
        </Field>

        <Field label="Tipo de Aeronave:">
           <Input type="text" name="tipoAeroNave" value={flightManifest.tipoAeroNave} onChange={handlerChange} />
        </Field>

        <Field label="Hora de Llegada">
        <Input type="time" name="llegadas" onChange={handlerChange} />
       </Field>

       <Field label="Hora de Salida">
        <Input type="time" name="salidas" onChange={handlerChange} />
       </Field>

       <Field label="Destino:">
           <Input type="text" name="destino" value={flightManifest.destino} onChange={handlerChange} />
        </Field>

        <Field label="Codigo ATO:">
           <Input type="text" name="codigoATO" value={flightManifest.codigoATO} onChange={handlerChange} />
        </Field>

        <Field label="Nombre ATO:">
           <Input type="text" name="nombreATO" value={flightManifest.nombreATO} onChange={handlerChange} />
        </Field>

         <Field label="Total Pax:">
        <Input type="number" name="totalPax" value={flightManifest.totalPax} onChange={handlerChange} />
       </Field>

       <Field label="Pax Exen:">
        <Input type="number" name="paxExen" value={flightManifest.paxExen} onChange={handlerChange} />
       </Field>
       
       <Field label="Inf:">
        <Input type="number" name="inf" value={flightManifest.inf} onChange={handlerChange} />
       </Field>

       <Field label="Collect:">
        <Input type="number" name="collect" value={flightManifest.collect} onChange={handlerChange} />
       </Field>

       <Field label="Tercera Edad:">
        <Input type="number" name="terceraEdad" value={flightManifest.terceraEdad} onChange={handlerChange} />
       </Field>

       <Field label="Pax Cargados:">
        <Input type="number" name="paxCargados" value={flightManifest.paxCargados} onChange={handlerChange} />
       </Field>

       <Field label="Comentarios:">
           <Input type="text" name="comentarios" value={flightManifest.comentarios} onChange={handlerChange} />
        </Field>

      </div>
      
                <div className="py-4">
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
                    Actualizar Manifiesto
                </Button>
                </div>
                
            </div>
        </div>
        </div>

    )
}

export default ModalEdit