
import './Album.css'
const Album = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
    return (
        <>
        <div className="seccion-subir-fotos">
        <div className="col-12 contenedor-subir-fotos">
        
        <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
        <input className="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        </div>


        <div className=" contenedor-fotos">
        <h1> </h1>
        </div>
      
        </>
      );
}
 
export default Album;