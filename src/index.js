import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import InicioDeSesion from './components/Login';
import './index.css'
import { useState } from 'react';
const Index = () => {

  const [estadoAlerta,cambiarEstadoAlerta]=useState(false);
  const [tipoMensaje,cambiarTipoMensaje]=useState({tipo:'error',mensaje:'ERROR NOT FOUND'})
  //tipo,mensaje,estadoAlerta, cambiarEstadoAlerta
  return ( 
    <>
    <InicioDeSesion 
    estadoAlerta={estadoAlerta}
     cambiarEstadoAlerta={cambiarEstadoAlerta}
     tipoMensaje={tipoMensaje}
     cambiarTipoMensaje={cambiarTipoMensaje}/>
    </>
   );
}
 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Index></Index>
  </React.StrictMode>
);

