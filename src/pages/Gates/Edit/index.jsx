import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Field from "../../../components/Shared/Field";
import Input from "../../../components/Shared/Input";
import { updateGate } from "../../../state-manager/features/gates/thunks";
import { getAirlinesCounters } from "../../../state-manager/features/airlinesCounters/thunks";
import { getFlightDestinations } from "../../../state-manager/features/flightDestinationCounters/thunks";
import { getStatusFlight } from "../../../state-manager/features/statusCounters/thunks";
import Button from "../../../components/Shared/Button";

//FORMULARIO PARA EDITAR GATES

const ModalEdit = ({ setOpen }) => {
  const { gate: gateObtain } = useSelector((state) => state.gate);

  const [StatusDisplay, setStatusDisplay] = useState(gateObtain.StatusDisplay);

  const [gate, setGate] = useState({
    GateNumber: gateObtain?.GateNumber,
    idAirline: gateObtain?.idAirline?.idAirline,
    FlightNumber: gateObtain?.FlightNumber,
    idFlightDestination: gateObtain?.idFlightDestination?.idFlightDestination,
    idStatusFlight: gateObtain?.idStatusFlight?.idStatusFlight,
  });

  const { loading: loadingAirlinesCounters, airline } = useSelector(
    (state) => state.airline
  );
  const { loading: loadingFlightDestination, flightdestination } = useSelector(
    (state) => state.flightdestination
  );
  const { loading: loadingStatusFlight, statusflight } = useSelector(
    (state) => state.statusflight
  );

  const dispatch = useDispatch();

  const handlerChange = (e) => {
    //e.preventDefault();
    const { name, value } = e.target;
    if (name == "StatusDisplay") {
      setStatusDisplay(!StatusDisplay);
    } else {
      setGate((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = () => {
    dispatch(updateGate({ id: gateObtain.idGate, StatusDisplay, ...gate }));
    setOpen(false);
  };

  useEffect(() => {
    setGate({
      GateNumber: gateObtain?.GateNumber,
      idAirline: gateObtain?.idAirline?.idAirline,
      FlightNumber: gateObtain?.FlightNumber,
      idFlightDestination: gateObtain?.idFlightDestination?.idFlightDestination,
      idStatusFlight: gateObtain?.idStatusFlight?.idStatusFlight,
    });
    setStatusDisplay(gateObtain?.StatusDisplay);
  }, [gateObtain]);

  useEffect(() => {
    dispatch(getAirlinesCounters());
  }, []);

  useEffect(() => {
    dispatch(getFlightDestinations());
  }, []);

  useEffect(() => {
    dispatch(getStatusFlight());
  }, []);

  return (
    <div
      id="modalOverlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    >
      <div className="bg-slate-900	 p-8 rounded shadow-lg relative w-full max-w-7xl max-h-full overflow-y-auto">
        <div className="bg-slate-900 p-8 rounded shadow-lg">
          <h2 className="font-semibold mb-8 text-white text-5xl text-center">
            Gestionar Gate
          </h2>

          {/*
            <div className="mb-4">
              <Field label="Numero de Gate:">
                <Input
                  value={gate.GateNumber}
                  name="GateNumber"
                  onChange={handlerChange}
                />
              </Field>
            </div>
  */}

          <Field label="Aerolinea:">
            <select
              value={gate?.idAirline}
              name="idAirline"
              onChange={handlerChange}
              className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Selecciona una Aerolinea</option>
              {airline?.map((airlinesC) => (
                <option value={airlinesC.idAirline}>
                  {" "}
                  {airlinesC.nombreAirline}{" "}
                </option>
              ))}
            </select>
          </Field>

          <div className="mb-4">
            <Field label="Numero de Vuelo:">
              <Input
                value={gate.FlightNumber}
                name="FlightNumber"
                onChange={handlerChange}
              />
            </Field>
          </div>

          <Field label="Destino del Vuelo:">
            <select
              value={gate?.idFlightDestination}
              name="idFlightDestination"
              onChange={handlerChange}
              className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Selecciona un Destino</option>
              {flightdestination?.map((flightDes) => (
                <option value={flightDes.idFlightDestination}>
                  {" "}
                  {flightDes.nombreFlightDestination}{" "}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Estado del Vuelo:">
            <select
              value={gate?.idStatusFlight}
              name="idStatusFlight"
              onChange={handlerChange}
              className="bg-neutral-500	 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Selecciona un estado</option>
              {statusflight?.map((statusFli) => (
                <option value={statusFli.idStatusFlight}>
                  {" "}
                  {statusFli.nombreStatusFlight}{" "}
                </option>
              ))}
            </select>
          </Field>

          <div className="mb-4">
            

            <input
              className="mr-2 mt-[2rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-blue-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-neutral-400 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              onChange={handlerChange}
              name="StatusDisplay"
              checked={StatusDisplay}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="flexSwitchCheckDefault"
            >
              Activar
            </label>
          </div>

          <div className="py-4 mt-[2rem]">
            <Button
              variant="danger"
              onClick={() => setOpen(false)}
              id="modalCloseButton"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cerrar
            </Button>
          </div>
          <div className="py-4">
            <Button
              variant="primary"
              onClick={onSubmit}
              id="modalCloseButton"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Actualizar Gate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
