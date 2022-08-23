import React from 'react';
import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
        
       { vectorFotos.map((elemento,index)=>{
        return <div className='contenedor-imagenes' key={index}>
        <img className="imagen" src={elemento.img} alt="" key={index} />
         <button className="btn2 btn-success">Abrir</button>
         </div>
        // return <h3 key={index}>{elemento.img}</h3>
       })}

      
        </>);
}
 
export default ComponenteImagenes;