import React from 'react';
import './imagenes.css'
import Modal from './ModalComponent';

const ComponenteImagenes = ({ cambiarvectorFotos, vectorFotos }) => {

    return (<>
        <div className='contenedor-imagenes'>
            {vectorFotos.map((elemento, index) => {
                return <React.Fragment key={index}>
                    <img className="imagen" src={elemento.img} alt="" key={index}
                        data-bs-toggle="modal"
                        data-bs-target={"#"+index}
                        onClick={(e) => {
                            console.log(elemento)
                        }}></img>
                        <button className="btn btn-primary btn-lg" 
                data-bs-toggle="modal"
                data-bs-target="#modal-1">Abrir Modal {index}</button>

                  
                </React.Fragment>
                // return <h3 key={index}>{elemento.img}</h3>
            })}
        </div>
        <Modal index={1}></Modal>
    </>);
}

export default ComponenteImagenes;