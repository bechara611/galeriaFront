import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-12">
            <div className="contenedor-login">

              <form className="formulario">
                <h3>LOGIN</h3>
                <div className="row col-6">
                  
                    <input type="email" name="email" id="email" placeholder="EMAIL" />
                

                </div>
              </form>
            </div>
          </div>
        </div>


      </div>

    </>
  );
}


export default InicioDeSesion;