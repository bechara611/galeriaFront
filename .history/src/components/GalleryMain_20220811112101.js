import {NavLink,useNavigate } from 'react-router-dom'
import Alerta from '../elementos/Alertas';

const Gallery = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
    let navegar = useNavigate();

    return ( <>
        {estadoAlerta 
            ?
            <><Alerta estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}
            tipo={tipoMensaje.tipo}
            mensaje={tipoMensaje.mensaje}
            ></Alerta></>
            :
            <></>}
        <h1>GALLERY PART</h1>
        <NavLink to="/">Login</NavLink>
        <button onClick={()=>{ 
            
            navegar('/');
         }}>Login</button>
        </> );
}
 
export default Gallery;