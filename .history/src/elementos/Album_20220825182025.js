// import Boton from './../elementos/button'
import { useEffect } from 'react';
import { useState } from 'react';
import FooterComponente from '../components/Footer';
import ComponenteImagenes from '../elementos/Imagenes'
import {  DeleteImagenes, GetObtenerImagenes, postInsertarImagenes } from '../helpers/peticiones';
import './Album.css'
import Label from './Label';
import Loading from './loading';

import * as React from 'react';
import Stack from '@mui/material/Stack';

import CircularProgress from '@mui/material/CircularProgress';



const Album = ({ estadoAlerta, cambiarEstadoAlerta, tipoMensaje, cambiarTipoMensaje,estadoCompleto,cambiarestadoCompleto,estadoLoading,cambiarestadoLoading }) => {

  
 const [imagenes,subirImagenes]=useState(false);
 const [formdataUse,cambiarformdataUse]=useState(null);



 const [vectorFotos,cambiarvectorFotos]=useState(null)
 const [buscarImagenes,cambiarBuscarImagenes]=useState(true)
 const [vectorEliminarEstado,cambiarvectorEliminarEstado]=useState([])
 const [ejecutarBorrar,cambiarejecutarBorrar]=useState(false)
 useEffect(() => {
 
  async function funcion(){
  
        // eslint-disable-next-line
    const respuesta = await postInsertarImagenes(localStorage.getItem('token'),formdataUse)
      .then(respuesta=>{
       
       
        cambiarestadoCompleto(true)
         cambiarEstadoAlerta(true);
         cambiarTipoMensaje({tipo:"exito",mensaje:"COMPLETE"})
        subirImagenes(false)
        cambiarestadoLoading(false)
        cambiarBuscarImagenes(true)
    
        return respuesta})
      .catch(error=>{
        cambiarestadoLoading(false)
        cambiarEstadoAlerta(true);
        cambiarTipoMensaje({tipo:"error",mensaje:error.response.data.errors.msg})
        subirImagenes(false)
        return error})
  }
  if (imagenes===true) {
    funcion()
    
    cambiarBuscarImagenes(true)
    subirImagenes(false)
  }
       // eslint-disable-next-line
 }, [imagenes])
 
 useEffect(()=>{
  async function Metodo(){
    const respuesta = await GetObtenerImagenes()
      .then(respuesta=>{
        return respuesta;
      })
      .catch(error=>{
        if(error.response.data.errors[0].msg){
          cambiarEstadoAlerta(true);
          if(error.response.data.errors[0].msg){ cambiarTipoMensaje({tipo:'error',mensaje:error.response.data.errors[0].msg})}
          else{
            cambiarTipoMensaje({tipo:'error',mensaje:'Error'})
          }
         
           return error;
        }
       
      })
      if(!respuesta.data.errors){
        // console.log(respuesta.data.usuarioEimagenes[0].img)
        let imagenes=[];
        for(let i=0; i< respuesta.data.usuarioEimagenes.length;i++ ){
          imagenes.push(respuesta.data.usuarioEimagenes[i])
        }
        cambiarvectorFotos(imagenes)
        return
      }else{
        cambiarvectorFotos(null)
        return
      }
     
     
  }
  if(buscarImagenes===true){
    Metodo();
    cambiarBuscarImagenes(false)
  }

   // eslint-disable-next-line
 },[buscarImagenes])

 useEffect(()=>{
  async function ejecutar(){
    // eslint-disable-next-line
    const respuesta= await DeleteImagenes(vectorEliminarEstado)
      .then((respuesta)=>{
        cambiarestadoCompleto(true)
        cambiarestadoLoading(false)
        cambiarEstadoAlerta(true);
        cambiarTipoMensaje({tipo:"exito",mensaje:"DELETED"})
       cambiarestadoLoading(false)
       cambiarBuscarImagenes(true)
       cambiarvectorEliminarEstado([]);
        return respuesta
      })
      .catch((error)=>{
        cambiarestadoCompleto(true)
        cambiarestadoLoading(false)
        cambiarEstadoAlerta(true);
        cambiarTipoMensaje({tipo:"error",mensaje:error.response.data.errors.msg})
        return error
      })
     
  } 
  if(ejecutarBorrar===true){
    ejecutar();
    cambiarejecutarBorrar(false)
  }
  // eslint-disable-next-line
 },[ejecutarBorrar])
  return (
    <>
    {estadoLoading 
      ?
      <><Loading flexito
      estadoLoading={estadoLoading}
      cambiarestadoLoading={cambiarestadoLoading}
      estadoCompleto={estadoCompleto}
      cambiarestadoCompleto={cambiarestadoCompleto}
      >
      
      </Loading>
      
      </>
      :
      <></>}
      <div className="seccion-subir-fotos">
        <div className="row contenedor-subir-fotos">
          <div className=" col-12 contenedor-titulo-subir">
            <p className='titulo-subir'>UPLOAD YOUR IMAGES</p>
          </div>
          <div className="col-12 contenedor-form-subir">

            <Label fondoVerde htmlFor="upload" className='btn boton-imagenes'><span className='texto-boton'>SELECT IMAGES</span></Label>
            <input id="upload" multiple type="file" accept="image/.jpeg,.jpg,.png,.gif,.ico" name="imagenes" className='ocultar' onChange={(e)=>{
              cambiarestadoLoading(true)
              if(e.target.value.length>0){
              
                const formData = new  FormData();
                for(let i=0;i<e.target.files.length;i++){
                
                 formData.append('imagenes', e.target.files[i]);

                }
                cambiarformdataUse(formData);
                subirImagenes(true)
                cambiarBuscarImagenes(false);
                cambiarBuscarImagenes(true);
              }else{
                return
              }
            }}></input>
         

         
          </div>
          {
            (estadoLoading)?
            <>
            <div className=" centrarloading">
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
           
          </Stack>
            </div>
          
            </>:
            
            <></>
          }
          

        </div>
      </div>




   
    <div className="contenedor-fotos-padre">
    
      <div className="contenedor-fotos">
      
      <div className="contenedorIconoBorrar">
      <div className="centrarNuevo">
      <p className='tituloPhotos'>Gallery</p>
      </div>
      <span className='iconoBorrar' onClick={(e)=>{
  
        if(vectorEliminarEstado.length>0){
          cambiarestadoLoading(true)
          cambiarejecutarBorrar(true)
        }else{
          cambiarestadoCompleto(true)
          cambiarestadoLoading(false)
          cambiarEstadoAlerta(true);
          cambiarTipoMensaje({tipo:"error",mensaje:'CHOOSE AT LEAST ONE IMAGE'})
         
        }
       let elementos = document.getElementsByName('checkeables');
       elementos.forEach((elemento,index)=>{
        elemento.checked=false
       })
      }}><i className="fa-solid fa-trash-can"></i></span>
      </div>
      {(vectorFotos)
        ?
         <>
        <ComponenteImagenes vectorFotos={vectorFotos}
        cambiarvectorFotos={cambiarvectorFotos}
        cambiarvectorEliminarEstado={cambiarvectorEliminarEstado}
        vectorEliminarEstado={vectorEliminarEstado}
        ></ComponenteImagenes>
         </>
      : 
      <>
      <p className='NoData'>NO DATA</p>
      </>}
    
      </div>
      
      </div>
      <FooterComponente></FooterComponente>
    </>
  );
}

export default Album;