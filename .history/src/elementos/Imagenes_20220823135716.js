import React from 'react';
import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
        <div className='contenedor-imagenes'>
       { vectorFotos.map((elemento,index)=>{
        return<React.Fragment key={index}> 
        <img className="imagen" src={elemento.img} alt="" key={index} />
         <button className="btn2 btn-success">Abrir</button>
         </React.Fragment>
        // return <h3 key={index}>{elemento.img}</h3>
       })}
       </div>
      
        </>);
}
 
export default ComponenteImagenes;