import React from 'react';
import Button from '../../components/Shared/Button';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../constants-definitions/indexConstantDefinitions';
import Input from '../../components/Shared/Input';
import Field from '../../components/Shared/Field';
import { useState, useEffect } from 'react';
import { login } from '../../state-manager/features/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth } from '../../state-manager/features/auth/slice'
import backgroundImage from "../../assets/fondoavion.jpg";

const SignIn = () => {
  const { success, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const onSubmit =(e) => {
    e.preventDefault();
     dispatch(login(user))
  }

  useEffect(() => {
    if(success){
      navigate(PrivateRoutes.FLIGHTMANIFEST)
      dispatch(resetAuth())
    }
  }, [success, navigate])
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-[500px] h-[900] bg-gray-800 bg-opacity-60 p-6 py- rounded-lg"
      >
        <br />
        <h1 className="text-center text-4xl font-bold mb-20 text-white">
          DIGITAL SIGNAGE
        </h1>
        <hr/>
        <br />
        <h2 className="text-center text-4xl font-bold mb-20 text-white">
          Inicio Sesión
        </h2>

        <Field label="Usuario">
          <Input
            type="text"
            placeholder="Introduzca su usuario"
            onChange={({ target }) =>
              setUser((prev) => ({ ...prev, username: target.value }))
            }
          />
        </Field>

        <Field label="Contraseña" error={error ? "Crendenciales incorrectas" : ""}>
          <Input
            type="password"
            placeholder="Introduzca su contraseña"
            onChange={({ target }) =>
              setUser((prev) => ({ ...prev, password: target.value }))
            }
          />
        </Field>

        <div className="flex bottom-30 py-12 mt-8">
          <Button>Iniciar sesión</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;