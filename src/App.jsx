import { useState, useEffect } from "react";
import {
  RiHome3Line,
  RiCalendar2Line,
  RiFlightLandLine,
  RiFlightTakeoffFill,
  RiSuitcaseLine,
  RiPlaneLine,
  RiMenu3Fill,
  RiCloseLine,
  RiUser3Line
} from "react-icons/ri";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./constants-definitions/indexConstantDefinitions";
import Signin from "./pages/SignIn/indexSignIn";
import Private from "./pages/Private/indexPrivate";
import NotFound from "./pages/NotFound/indexNotFound";
import GuardRoute from "./guard/guardRoute";
import { useSelector, useDispatch } from "react-redux";
import { digitalApi } from "./api";
import { updateToken } from "./state-manager/features/auth/slice";

function App() {
  const {user} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(user?.access)
  if(user){
    digitalApi.defaults.headers.common['Authorization'] = `Bearer ${user.access}`
  }
  
  useEffect(() => {
    const refreshAccessToken = async () => {
      if(user){

        try {
            const { data } = await digitalApi.post('/token/refresh/', {
                refresh: user.refresh,
            });

            const newAccessToken = data.access;
            setAccessToken(newAccessToken)
            dispatch(updateToken(newAccessToken));
            
        } catch (error) {
            // Maneja los errores, como redirigir al usuario a iniciar sesión nuevamente
        }
      }

    };

    refreshAccessToken();
}, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
        <Route element={<GuardRoute privateValidation={true} />}>
          <Route path={PrivateRoutes.PRIVATE} element={<Private />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
