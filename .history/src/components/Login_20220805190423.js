import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container-fluid">

        <div className="contenedor-login col-4">
          <form className="formulario form">
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