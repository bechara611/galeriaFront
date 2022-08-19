import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import InicioDeSesion from './components/Login';
import './index.css'
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Gallery from './components/GalleryMain';
import { Helmet } from 'react-helmet';
import favIcon from './imagenes/gallery.ico'



const Index = () => {

   const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
   const [tipoMensaje, cambiarTipoMensaje] = useState({ tipo: 'error', mensaje: 'ERROR NOT FOUND' })
   const [estadoLoading, cambiarestadoLoading] = useState(false);
   const [estadoCompleto, cambiarestadoCompleto] = useState(false);

   return (
      <>
         <Helmet>
            <link rel='shorcut icon' href={favIcon} type='image/x-icon'></link>
            <title>Gallery App</title>
            <meta
               name="Gallery App by Bechara "
               content="Gallery App"
            />
         </Helmet>
         <BrowserRouter>
            <Routes>
               <Route path='/*' element={<InicioDeSesion
                  estadoAlerta={estadoAlerta}
                  cambiarEstadoAlerta={cambiarEstadoAlerta}
                  tipoMensaje={tipoMensaje}
                  cambiarTipoMensaje={cambiarTipoMensaje} />} />
               <Route path='/' element={<InicioDeSesion
                  estadoAlerta={estadoAlerta}
                  cambiarEstadoAlerta={cambiarEstadoAlerta}
                  tipoMensaje={tipoMensaje}
                  cambiarTipoMensaje={cambiarTipoMensaje}
                  estadoCompleto={estadoCompleto}
                  cambiarestadoCompleto={cambiarestadoCompleto}
                  estadoLoading={estadoLoading}
                  cambiarestadoLoading={cambiarestadoLoading}
                  />}></Route>
               <Route path='/gallery' element={<Gallery
                  estadoAlerta={estadoAlerta}
                  cambiarEstadoAlerta={cambiarEstadoAlerta}
                  tipoMensaje={tipoMensaje}
                  cambiarTipoMensaje={cambiarTipoMensaje}
                  estadoCompleto={estadoCompleto}
                  cambiarestadoCompleto={cambiarestadoCompleto}
                  estadoLoading={estadoLoading}
                  cambiarestadoLoading={cambiarestadoLoading}
                  ></Gallery>}></Route>
            </Routes>
         </BrowserRouter>

      </>
   );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Index></Index>

);

