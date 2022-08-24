import React from 'react';
import './imagenes.css'
import Modal from './ModalComponent';

const ComponenteImagenes2 = ({ cambiarvectorFotos, vectorFotos }) => {

    return (<>
        <div className='contenedor-imagenes'>
            {vectorFotos.map((elemento, index) => {
                return <React.Fragment key={index}>
                    <img className="imagen" src={elemento.img} alt="" key={index}
                        data-bs-toggle="modal"
                        data-bs-target={"#Modal-"+index}
                        onClick={(e) => {
                            console.log(elemento)
                        }}></img>
                       
                <Modal index={index} elemento={elemento}></Modal>
                  
                </React.Fragment>
                // return <h3 key={index}>{elemento.img}</h3>
            })}
        </div>
        
    </>);
}

export default ComponenteImagenes2;