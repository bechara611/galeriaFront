import React from 'react';

import './imagenes.css'
import Modal from './ModalComponent';

const ComponenteImagenes = ({ cambiarvectorFotos, vectorFotos, vectorEliminarEstado,cambiarvectorEliminarEstado}) => {
 
    return (<>
        <div className='contenedor-imagenes'>
            {vectorFotos.map((elemento, index) => {
                return <React.Fragment key={index}>
                <label className="checkeable">
  <input type="checkbox" name={index} id={index}  onChange={(e)=>{

   if(vectorEliminarEstado.length===0){
    cambiarvectorEliminarEstado([...vectorEliminarEstado,elemento.img])
    return
   }
   
    cambiarvectorEliminarEstado([...vectorEliminarEstado,elemento.img])
if(e.target.checked===false){
    let vector= vectorEliminarEstado.filter((element,index)=>{
     return element!==elemento.img
})
cambiarvectorEliminarEstado(vector)
}
   
 
 
  }}/>
  <img className="imagen" src={elemento.img} alt="" key={index}
                        data-bs-toggle="modal"
                        data-bs-target={"#Modal-"+index}
                        onClick={(e) => {
                            let check=document.getElementById(index)
                            if(check.checked===false){
                                
                                check.checked=true
                            }else{
                                check.checked=false
                                
                            }
                            let vector= vectorEliminarEstado.filter((element,index)=>{
                                return element!==elemento.img
                           })
                           cambiarvectorEliminarEstado(vector)
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