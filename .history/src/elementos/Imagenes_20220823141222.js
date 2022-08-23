import React from 'react';
import { useEffect } from 'react';
import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {

    useEffect(()=>{
        return <>
            <div className='contenedor-imagenes'>
           { vectorFotos.map((elemento,index)=>{
            return<React.Fragment key={index}> 
            <img className="imagen" src={elemento.img} alt="" key={index} />
            
             </React.Fragment>
            // return <h3 key={index}>{elemento.img}</h3>
           })}
           </div>
          
            </>;

    },[vectorFotos])
   
}
 
export default ComponenteImagenes;