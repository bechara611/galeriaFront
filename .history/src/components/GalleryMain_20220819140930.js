import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import Alerta from '../elementos/Alertas';
import HeaderPrincial2 from './Header2';

import './GalleryMain.css'
import Album from '../elementos/Album';
import Loading from '../elementos/loading';


const Gallery = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje,estadoCompleto,cambiarestadoCompleto,estadoLoading,cambiarestadoLoading}) => {
 
    let navegar = useNavigate();

    useEffect(()=>{
        let token= localStorage.getItem('token')
        if(token){
            cambiarEstadoAlerta(true);
            cambiarTipoMensaje({tipo:'exito',mensaje:'LOGIN SUCCESS'})
        }else{
            cambiarEstadoAlerta(true);
            cambiarTipoMensaje({tipo:'error',mensaje:'PLEASE, YOU HAVE TO LOGIN FIRST.'})
            navegar('/')
        }
        
        // eslint-disable-next-line
    },[])


    return ( <>
        {estadoAlerta 
            ?
            <><Alerta estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}
            tipo={tipoMensaje.tipo}
            mensaje={tipoMensaje.mensaje}
            ></Alerta></>
            :
            <></>}
      
            
            <div className="main">
        <HeaderPrincial2></HeaderPrincial2>
        <br></br>
        <br></br>
       
        <Album estadoAlerta={estadoAlerta} 
        cambiarEstadoAlerta={cambiarEstadoAlerta}
        tipoMensaje={tipoMensaje}
        cambiarTipoMensaje={cambiarTipoMensaje}
        estadoCompleto={estadoCompleto}
        cambiarestadoCompleto={cambiarestadoCompleto}
        estadoLoading={estadoLoading}
        cambiarestadoLoading={cambiarestadoLoading}
        ></Album>
      
        
        
      
         </div>
        </> );
}
 
export default Gallery;