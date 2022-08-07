import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container-fluid fondo">

        <div className="contenedor-login col-4">
              
          <form className="formulario form">
          <h3>LOGIN</h3>   
              <div className="row">
              <div className="col-12">
              <input type="email" name="email" id="email" placeholder="EMAIL" col-4 />
              </div>
             
              </div>
          </form>
        </div>
      </div>

    </>
  );
}


export default InicioDeSesion;