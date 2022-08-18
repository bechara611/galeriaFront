// import Boton from './../elementos/button'
import { useState } from 'react';
import './Album.css'
import Label from './Label';
const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje }) => {
 const [imagenes,cambiarImagenes]=useState(null);
  return (
    <>
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">
          <div className=" col-12 contenedor-titulo-subir">
            <p className='titulo-subir'>UPLOAD YOUR IMAGES</p>
          </div>
          <div className="col-12 contenedor-form-subir">

            <Label fondoVerde htmlFor="upload" className='btn boton-imagenes'><span className='texto-boton'>SELECT IMAGES</span></Label>
            <input id="upload" multiple type="file" accept="image/*" name="imagenes" className='ocultar' onChange={(e)=>{
              if(e.target.value.length>0){
              
                const formData = new  FormData();
                for(let i=0;i<e.target.files.length;i++){
                
                 formData.append('imagenes', e.target.files[i]);

                }
                console.log(formData)
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