import Boton from './../elementos/button'
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
            <input className="form-control form-control-sm inputFile" type="file" id="formFileMultiple" multiple />
            <Boton fondoVerde className='btn col-8 btnCargar'> UPLOAD </Boton>
            <label className="btn btn-info btn-lg">
  Upload
  <input type="file" className="display: none" />
</label>
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