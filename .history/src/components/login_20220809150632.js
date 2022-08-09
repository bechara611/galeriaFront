//import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";

import FormularioLogin from '../elementos/formularioLogin';
import './../components/Login.css'

const InicioDeSesion = (div) => {
  return (

    <>
    
      <div className="container-fluid fondo">
        <div className="row centrar p-2">
          <div className="col-12 col-sm-6 col-md-5 my-2 contenedor-login">
          <FormularioLogin></FormularioLogin>
          </div>
        </div>
      </div>

    </>
  );
}


export default InicioDeSesion;