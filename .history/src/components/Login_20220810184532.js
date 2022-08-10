//import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Alerta from '../elementos/Alertas';
import FormularioLogin from '../elementos/formularioLogin';
import FormularioRegister from '../elementos/formularioRegister';
import './../components/Login.css'
  //tipo,mensaje,estadoAlerta, cambiarEstadoAlerta
const InicioDeSesion = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
  const [register,cambiarRegister] = useState(false);
  return (

    <>
    
      <div className="container-fluid fondo">
        <div className="row centrar p-2">
        {estadoAlerta 
          ?
          <><Alerta estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}
          tipo={tipoMensaje.tipo}
          mensaje={tipoMensaje.mensaje}
          ></Alerta></>
          :
          <></>
         }
         <CSSTransition
         appear
         in
         classNames={'modal-transition'}
         timeout={300}
         >
          <div className="col-12 col-sm-8 col-md-4 my-2 contenedor-login">
          {register ? 
            <>
          
            <FormularioRegister register={register} cambiarRegister={cambiarRegister}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
            cambiarTipoMensaje={cambiarTipoMensaje}
            className='claseEspecial'
            ></FormularioRegister>
           
            </> 
            :
            
            <>
           
            <FormularioLogin register={register} cambiarRegister={cambiarRegister}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
            cambiarTipoMensaje={cambiarTipoMensaje}
            ></FormularioLogin>
            </>
          }
          </CSSTransition>
          </div>
        </div>
      </div>

    </>
  );
}


export default InicioDeSesion;