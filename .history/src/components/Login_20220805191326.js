import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-6">
           

              <form className="formulario contenedor-login">
                <h3>LOGIN</h3>
                <div className="row ">
                  
                    <input type="email" className="form-control" name="email" id="email" placeholder="EMAIL" />
                

                </div>
              </form>
          
          </div>
        </div>


      </div>

    </>
  );
}


export default InicioDeSesion;