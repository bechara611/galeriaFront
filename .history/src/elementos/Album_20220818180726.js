// import Boton from './../elementos/button'
import { useEffect } from 'react';
import { useState } from 'react';
import { postInsertarImagenes } from '../helpers/peticiones';
import './Album.css'
import Label from './Label';
const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje }) => {
 const [imagenes,subirImagenes]=useState(false);
 const [formdataUse,cambiarformdataUse]=useState(null);
 useEffect(() => {
 
  const funcion = async function(){
        // eslint-disable-next-line
    const respuesta = await postInsertarImagenes(localStorage.getItem('token'),formdataUse)
      .then(respuesta=>{
       
        cambiarEstadoAlerta(true);
        cambiarTipoMensaje({tipo:"exito",mensaje:"COMPLETE"})
        return respuesta})
      .catch(error=>{
       
        cambiarEstadoAlerta(true);
        cambiarTipoMensaje({tipo:"error",mensaje:error.response.data.errors.msg})
        
        return error})
  }
  if (imagenes===true) {
    funcion()
    subirImagenes(false)
  }
       // eslint-disable-next-line
 }, [imagenes,subirImagenes])
 
  return (
    <>
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">
          <div className=" col-12 contenedor-titulo-subir">
            <p className='titulo-subir'>UPLOAD YOUR IMAGES</p>
          </div>
          <div className="col-12 contenedor-form-subir">

            <Label fondoVerde htmlFor="upload" className='btn boton-imagenes'><span className='texto-boton'>SELECT IMAGES</span></Label>
            <input id="upload" multiple type="file" accept="image/.jpeg,.jpg,.png,.gif,.ico" name="imagenes" className='ocultar' onChange={(e)=>{
              if(e.target.value.length>0){
              
                const formData = new  FormData();
                for(let i=0;i<e.target.files.length;i++){
                
                 formData.append('imagenes', e.target.files[i]);

                }
                cambiarformdataUse(formData);
                subirImagenes(true)
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