import { useEffect } from 'react';
import {NavLink,useNavigate } from 'react-router-dom'
import Alerta from '../elementos/Alertas';
import HeaderPrincial from './Header';
import './GalleryMain.css'

const Gallery = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
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
        <HeaderPrincial></HeaderPrincial>
        <br></br>
        <br></br>
       
        <NavLink to="/">Login</NavLink>
        
        
        
        <button onClick={()=>{ 
            
            navegar('/');
         }}>Login</button>
         </div>
        </> );
}
 
export default Gallery;