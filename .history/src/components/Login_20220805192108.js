import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container fondo">
      <div className="row">
      <div className="col-4 mt-2 contenedor-login">
      <form action="" className='mt-2 formulario'>
      <h3>Login</h3>
      <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control'/>
      <input type="email" placeholder="EMAIL" className='col-12 form-control'/>
      <button className="btn btn-primary">ENVIAR</button>
      </form>
      </div>
      </div>
      </div>

    </>
  );
}


export default InicioDeSesion;