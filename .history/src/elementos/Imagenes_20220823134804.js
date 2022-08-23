import React from 'react';
import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
        
       { vectorFotos.map((elemento,index)=>{
        return <React.Fragment> 
        <img className="imagen" src={elemento.img} alt="" key={index} />
         <button className="btn btn-success">Abrir</button>
         </React.Fragment>
        // return <h3 key={index}>{elemento.img}</h3>
       })}

      
        </>);
}
 
export default ComponenteImagenes;