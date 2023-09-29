import React, { useEffect, useState } from 'react'
import Table from '../../containers/Table/indexTable'
import Screen from '../../containers/Screen/indexScreen'
import ScreenHeader from '../../containers/ScreenHeader';
import Button from '../../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createFlightManifest, getFlightManifest, deleteFlightManifest, getOneFlightMani} from '../../state-manager/features/flight-manifest/thunks';
import Empty from '../../containers/Empty';
import Loader from '../../components/Shared/Loader';
import CreateFlightManifest from './Create';
import { resetFlightManifest } from '../../state-manager/features/flight-manifest/slice';
import ModalEdit from './Update';
import Input from '../../components/Shared/Input';
import ExportExcel from '../../components/Shared/useExportExcel';



const HEADERS=['Aerolinea', 'Codigo Operador', 'Fecha Guardado', 'Matricula Aeronave', 'Vuelo', 'Tipo Aeronave', 'Hora Llegada', 'Hora Salida', 'Destino', 'Tipo Codigo ATO', 'Nombre ATO', 'Total pax', 'Pax Exen', 'Inf', 'Collect', 'Tercer Edad', 'Pax Cargados', 'Comentarios']

const FlightManifest = () => {

  
  const { flightManifest, loading, error, success } = useSelector(state => state.flightManifest)

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [searchStart, setSearchStart] = useState(new Date());

  const [searchEnd, setSearchEnd] = useState(new Date());


  
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();

  const deleteElement = (id) => {
        dispatch(deleteFlightManifest(id))
    }

  const updateElement = (id) => {
    dispatch(getOneFlightMani(id));
    setOpenEdit(true);
  }

  useEffect(() => {
    if(success){
      dispatch(resetFlightManifest())
    }
    dispatch(getFlightManifest());
  }, [success]);


  return (
    <Screen>
     
      <ScreenHeader title="Manifiestos de Vuelo">



        <div className='w-3/12 py-4 ml-12 mt-10 flex '>
          <Input type="date"  onChange={(e) => setSearchStart(e.target.value)} />
        </div>


        <div className='w-3/12 py-4 mt-10 flex '>
          <Input type="date"  onChange={(e) => setSearchEnd(e.target.value)} />
        </div>




        <div className='w-3/12 py-4 mt-10 flex '>
          <Input placeholder="Numero de Vuelo..." onChange={(e) => setSearch(e.target.value)} />
        </div>
        
        <div className='w-30 py-0 flex mr-1 mb-3'>
          <ExportExcel items={flightManifest?.filter((f) => f.Date>searchStart && f.Date<searchEnd)?.filter((f) => f.numeroVuelo.toLowerCase().includes(search.toLowerCase()))} />
        </div>
        


        <div>
        <div className='w-30 py-0 flex ml-1 mr-5 mb-3'>
          <Button onClick={() => setOpen(true) }>Crear Manifiesto</Button>
        </div>
        </div>
        
      </ScreenHeader>
      {loading ? (<div>
        <Loader />
      </div>) : (
        <>
          {flightManifest.length == 0 ?
            <Empty />
            : (
              <Table deleteElement={deleteElement} updateElement={updateElement} id="idFlightManifest" data={flightManifest.filter((f) => f.Date>searchStart && f.Date<searchEnd).filter((f) => f.numeroVuelo.toLowerCase().includes(search.toLowerCase()))} keys={['idAirline.nombreAirline', 'OperatorCode', 'Date', 'Matricula', 'numeroVuelo', 'tipoAeroNave', 'llegadas', 'salidas', 'destino', 'codigoATO', 'nombreATO', 'totalPax', 'paxExen', 'inf', 'collect', 'terceraEdad', 'paxCargados', 'comentarios']} headers={HEADERS} />
            )
          }

        </>

      )}

      {openEdit && <ModalEdit setOpen={setOpenEdit}/>}
      {open && <CreateFlightManifest setOpen={setOpen} />}
    </Screen>
  )
}

export default FlightManifest