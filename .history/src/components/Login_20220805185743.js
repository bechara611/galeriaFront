import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'
const InicioDeSesion = () => {


    return (

        <>
            <div className="container-fluid fondo ">
         
            <div className="contenedor-login">
            <h3>LOGIN</h3>
                <form action="" className="formulario form">
                <div className="row">
                <input type="email" name="email" id="email" placeholder="EMAIL" />
                </div>
              
                </form>
                </div>

        
                
            </div>
        </>
    );
}

export default InicioDeSesion;