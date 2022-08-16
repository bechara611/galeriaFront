import { useEffect } from 'react';
import {NavLink,useNavigate } from 'react-router-dom'
import Alerta from '../elementos/Alertas';
import Header from './Header';

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
        <Header></Header>
        <br></br>
        <h1>GALLERY PART</h1>
        <NavLink to="/">Login</NavLink>
        <button onClick={()=>{ 
            
            navegar('/');
         }}>Login</button>
        </> );
}
 
export default Gallery;