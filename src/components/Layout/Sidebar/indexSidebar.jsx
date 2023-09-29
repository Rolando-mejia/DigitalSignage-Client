import React, { useState } from 'react'
import { 
    RiHome3Line, 
    RiCalendar2Line,
    RiFlightLandLine, 
    RiFlightTakeoffFill,
    RiSuitcaseLine,
    RiPlaneLine,
    RiMenu3Fill,
    RiCloseLine,
    RiUser3Line  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../../constants-definitions/indexConstantDefinitions';
import { useDispatch } from 'react-redux';
import { logout } from '../../../state-manager/features/auth/thunks';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    // <div className="bg-[#141414] min-h-screen">
      <div className={`fixed top-0 w-100 h-full overflow-y-hiden border-r border-gray-600 p-8 flex flex-col justify-between transition-all lg:left-0 duration-500 bg-[#141414] -left-full ${showMenu ? "left-0" : "-left-full"
      }`}>
      {/* Etiquetas de Navegación en el Sidebar */}
        <div>
         {/* Logo */}  
         <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
          Digital Signage
         </h1>
         <ul>
          {/*<li>
            <Link to={PrivateRoutes.HOME} className="text-gray-300 flex  items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
              <RiHome3Line/>
               Inicio
            </Link>
          </li>*/}
          <li>
            <Link to={PrivateRoutes.FLIGHTMANIFEST} className="text-gray-300 flex  items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
              <RiCalendar2Line/>
               Manifestos de Vuelo
            </Link>
          </li>
          <li>
            <Link to={PrivateRoutes.ARRIVALS} className="text-gray-300 flex  items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
              <RiFlightLandLine/>
               Llegadas
            </Link>
          </li>
          <li>
            <Link to={PrivateRoutes.DEPARTURES} className="text-gray-300 flex  items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
              <RiFlightTakeoffFill/>
               Salidas
            </Link>
          </li>
          <li>
            <Link to={PrivateRoutes.CHECKINCOUNTERS} className="text-gray-300 flex  items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
              <RiSuitcaseLine/>
               Checkin Counters
            </Link>
          </li>
          <li>
            <Link to={PrivateRoutes.GATES} className="text-gray-300 flex  items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
              <RiPlaneLine/>
               Gates
            </Link>
          </li>
         </ul>
        </div>

      {/* Sección de muestra de usuario Logueado */}
        <div>
          <ul>
            <li>
              <button onClick={logoutHandler} className="text-gray-300 flex  items-center gap-4 py-3 px-4 rounded-xl transition-colors">
                <RiUser3Line/>
                 Logout
              </button>
            </li>
            
          </ul>
        </div>

        {/* Boton menu Movil */}
        <button onClick={toggleMenu} className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
        </button>
      </div>
    // </div>
  )
}

export default Sidebar