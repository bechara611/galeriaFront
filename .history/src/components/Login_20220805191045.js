import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";
import './../components/Login.css'


const InicioDeSesion = () => {
  return (

    <>
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-12">
            <div className="contenedor-login col-6">

              <form className="formulario">
                <h3>LOGIN</h3>
                <div className="row ">
                  
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