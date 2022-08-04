import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import Loginsesion from './components/InicioSesion';

const Index = () => {
    return ( 
        <Login></Login>
     );
}
 


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
        <>
   <Loginsesion></Loginsesion>
         </>
 
);

