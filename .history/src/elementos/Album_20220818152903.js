// import Boton from './../elementos/button'
import './Album.css'
import Label from './Label';
const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje }) => {
  return (
    <>
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">
       
          <div className="col-12 contenedor-form-subir">

            <Label fondoVerde htmlFor="upload" className='btn boton-imagenes'>SELECT IMAGES</Label>
            <input id="upload" multiple type="file" name="imagenes" className='ocultar'></input>












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