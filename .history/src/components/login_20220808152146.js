//import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = (div) => {
  return (

    <>
    
      <div className="container-fluid fondo">
        <div className="row centrar p-2">
          <div className="col-12 col-sm-8 col-md-5 my-2 contenedor-login">
            <form action="" className='mt-2 formulario'>
            <div className='col-12 centrar2 mb-2'><h3>Login</h3></div>
            <div className="col-12 centrar2">
            <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' />
            <input type="password" placeholder="PASSWORD" className='col-12 form-control' />
            </div>
             <div className="col-12 centrar2 mt-3">
             <button className="btn btn-success col-8 mt-2">LOGIN</button>
             <button className="btn btn-primary col-8 mt-2">REGISTER</button>
             </div>
             <div className="centrar2 mt-5 col-12">
             <button className='btn btn-info col-4'>RECOVERY PASSWORD</button>
             </div>
             
            </form>
          </div>
        </div>
      </div>

    </>
  );
}


export default InicioDeSesion;