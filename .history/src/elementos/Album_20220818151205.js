// import Boton from './../elementos/button'
import './Album.css'
const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje }) => {
  return (
    <>
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">
          <div className=" col-12 contenedor-titulo-subir">
            <p className='titulo-subir'>UPLOAD YOUR IMAGES</p>
          </div>
          <div className="col-12 contenedor-form-subir">
         
          <label for="fusk">dsfdsfsd</label>
  <input id="fusk" type="file" name="photo" className='ocultar'></input>












          </div>
        </div>
      </div>


      <div className=" contenedor-fotos">
        <h1> </h1>
      </div>

    </>
  );
}

export default Album;