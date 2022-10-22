import React from "react";
import { Navigate } from 'react-router-dom'


const LoginNach = () => {

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<null | string>(null)

  const procesarDatos = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(!email.trim()){
      console.log('Ingrese Email')
      setError('Ingrese Email')
      return
    }
    if(!password.trim()){
      console.log('Ingrese contraseña')
      setError('Ingrese contraseña')
      return <Navigate to="/employees" />
    }
    if(password.length < 6){
      console.log('contraseña necesaria de 6 caracters')
      setError('contraseña menor de 6 caracteres')
      return
    }
    if (email === "luis_valencia@live.es") {
      setError("Email no registrado o incorrecto");
      return
    }
    if (password === "Osopolar123") {
      setError("Cuenta existente. Password erronea");
      return
    }
    <Navigate to="/admin" />
    setError(null)
    setEmail("");
    setPassword("");

    console.log('Pasando todas las validaciones')
  }
  return (
    <div className="mt-5">
      <h3 className="text-center">Acceso</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
          {
                error ? (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                ) : null
            }
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Coloca tu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Coloca su contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="d-flex flex-column justify-content-center">
              <button className="btn btn-dark btn-lg btn-block mb-2">
                Comprueba
              </button>
              {/*
              <button className="btn btn-info btn-sm btn-block">
                Registrate
              </button>
              */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginNach;
