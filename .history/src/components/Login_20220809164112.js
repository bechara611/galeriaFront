//import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";

import { useState } from 'react';
import ContenedorAlerta from '../elementos/Alertas';
import FormularioLogin from '../elementos/formularioLogin';
import FormularioRegister from '../elementos/formularioRegister';
import './../components/Login.css'

const InicioDeSesion = (div) => {
  const [register,cambiarRegister] = useState(false);
  return (

    <>
    
      <div className="container-fluid fondo">
      <ContenedorAlerta><p>HOLAAAAA</p></ContenedorAlerta>
        <div className="row centrar p-2">
        <ContenedorAlerta><p>HOLAAAAA</p></ContenedorAlerta>
          <div className="col-12 col-sm-8 col-md-4 my-2 contenedor-login">
          {register ? 
            <>
            <FormularioRegister register={register} cambiarRegister={cambiarRegister} ></FormularioRegister>
            </> 
            :
            
            <>
           
            <FormularioLogin register={register} cambiarRegister={cambiarRegister}></FormularioLogin>
            </>
          }
         
          </div>
        </div>
      </div>

    </>
  );
}


export default InicioDeSesion;