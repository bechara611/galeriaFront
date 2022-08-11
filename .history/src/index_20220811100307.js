import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import InicioDeSesion from './components/Login';
import './index.css'
import { useState } from 'react';
import { BrowserRouter,Routes } from 'react-router-dom';
const Index = () => {

  const [estadoAlerta,cambiarEstadoAlerta]=useState(false);
  const [tipoMensaje,cambiarTipoMensaje]=useState({tipo:'error',mensaje:'ERROR NOT FOUND'})
  //tipo,mensaje,estadoAlerta, cambiarEstadoAlerta
  return ( 
    <>
    <BrowserRouter>  
    <Routes></Routes>
      <InicioDeSesion 
    estadoAlerta={estadoAlerta}
     cambiarEstadoAlerta={cambiarEstadoAlerta}
     tipoMensaje={tipoMensaje}
     cambiarTipoMensaje={cambiarTipoMensaje}/>
     </BrowserRouter>

    </>
   );
}
 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <Index></Index>
 
);

