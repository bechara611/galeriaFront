import React from 'react';

import './imagenes.css'
import Modal from './ModalComponent';

const ComponenteImagenes = ({ cambiarvectorFotos, vectorFotos, vectorEliminarEstado,cambiarvectorEliminarEstado}) => {
    let vectorEliminar=[];
    return (<>
        <div className='contenedor-imagenes'>
            {vectorFotos.map((elemento, index) => {
                return <React.Fragment key={index}>
                <label className="checkeable">
  <input type="checkbox" name={index+1} id={"check"+(index+1)} onChange={(e)=>{
    if(vectorEliminar.length===0){
        vectorEliminar.push(elemento.img)
    }
   
     if(e.target.checked===true){
        //TODO VAS A INCORPORAR 
     
       
      vectorEliminar.push(elemento.img)
    
    }if(e.target.checked===false){
        if(vectorEliminar.includes(elemento.img)){
       vectorEliminar=vectorEliminar.filter((imagen)=>{
            return imagen!==elemento.img
        })
    }
//TODO REVISA TU VECTOR ELIMINAR Y SACALO DE AHI
    }
    console.log(vectorEliminar)
 
 
  }}/>
  <img className="imagen" src={elemento.img} alt="" key={index}
                        data-bs-toggle="modal"
                        data-bs-target={"#Modal-"+index}
                        onClick={(e) => {
                            let check=document.getElementById("check"+(index+1))
                            if(check.checked===false){
                                check.checked=true
                            }else{
                                check.checked=false
                            }
                            
                            console.log(elemento)
                           
                        }}></img>
</label>
                    
                       
                <Modal index={index} elemento={elemento}></Modal>
                  
                </React.Fragment>
                // return <h3 key={index}>{elemento.img}</h3>
            })}
        </div>
        
    </>);
}

export default ComponenteImagenes;