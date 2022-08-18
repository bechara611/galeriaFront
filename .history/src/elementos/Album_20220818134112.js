
import './Album.css'
const Album = ({estadoAlerta,cambiarEstadoAlerta,tipoMensaje,cambiarTipoMensaje}) => {
    return (
        <>
        <div className="seccion-subir-fotos">
        <div className="col-12 contenedor-subir-fotos">
        
        <input type="file" className="form-control browse " placeholder="Archivo"/>
      
        </div>
        </div>


        <div className=" contenedor-fotos">
        <h1> </h1>
        </div>
      
        </>
      );
}
 
export default Album;