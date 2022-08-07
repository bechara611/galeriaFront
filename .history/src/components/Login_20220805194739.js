import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container-fluid fondo">
        <div className="row centrar p-2">
          <div className="col-12 col-sm-8 col-md-5 my-2 contenedor-login">
            <form action="" className='mt-2 formulario'>
              <h3>Login</h3>
              <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' />
              <input type="password" placeholder="PASSWORD" className='col-12 form-control' />
              <button className="btn btn-primary col-12 mt-5">LOGIN</button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}


export default InicioDeSesion;