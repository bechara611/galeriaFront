import Boton from './../elementos/button'
import './Album.css'
const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje }) => {
  return (
    <>
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">

          <p className='titulo-subir'>UPLOAD IMAGES</p>
          <input className="form-control inputFile" type="file" id="formFileMultiple" multiple />
          <Boton fondoVerde className='btn col-8 btnCargar'> UPLOAD </Boton>
        </div>
      </div>


      <div className=" contenedor-fotos">
        <h1> </h1>
      </div>

    </>
  );
}

export default Album;