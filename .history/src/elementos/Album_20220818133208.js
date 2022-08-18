
import './Album.css'
const Album = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
    return (
        <>
        <div className="seccion-subir-fotos">
        <div className="col-12 contenedor-subir-fotos">
        
        <div className="input-group">
        <div className="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01">
          <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
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