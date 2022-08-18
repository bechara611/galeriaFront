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
          
         
          <label className="btn btn-success btn-lg inputFile col-4">
          Upload
          <input type="file" multiple className='ocultar' onChange={(e)=>{
            if(e.target.value.length<=0){
              return
             }

            if(e.target.value.length>0){
              console.log(e.target.value)
            }
           
              
          }} />
        </label>
       <p className='nombresImagenes col-8' >SELECT YOUR IMAGES</p>
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