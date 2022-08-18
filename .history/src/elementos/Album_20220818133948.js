
import './Album.css'
const Album = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
    return (
        <>
        <div className="seccion-subir-fotos">
        <div className="col-12 contenedor-subir-fotos">
        
        <div className="container">
        <div className="form-group" x-data="{ fileName: '' }">
          <div className="input-group shadow">
            <span className="input-group-text px-3 text-muted"><i className="fas fa-image fa-lg"></i></span>
            <input type="file" x-ref="file" name="img[]" className="d-none"></input>
            <input type="text" className="form-control form-control-lg" placeholder="Upload Image" x-model="fileName"></input>
            <button className="browse btn btn-primary px-4" type="button"><i className="fas fa-image"></i> Browse</button>
          </div>
        </div>
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