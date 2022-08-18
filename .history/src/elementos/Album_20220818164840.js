// import Boton from './../elementos/button'
import './Album.css'
import Label from './Label';
const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje }) => {
  return (
    <>
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">
          <div className=" col-12 contenedor-titulo-subir">
            <p className='titulo-subir'>UPLOAD YOUR IMAGES</p>
          </div>
          <div className="col-12 contenedor-form-subir">

            <Label fondoVerde htmlFor="upload" className='btn boton-imagenes'><span className='Hola'>SELECT IMAGES</span></Label>
            <input id="upload" multiple type="file" name="imagenes" className='ocultar' onChange={(e)=>{
              if(e.target.value.length>0){
                console.log(e.target.value)
              }else{
                return
              }
            }}></input>












          </div>
        </div>
      </div>







    <div className="contenedor-fotos-padre">
      <div className="contenedor-fotos">
     
      </div>
      </div>

    </>
  );
}

export default Album;