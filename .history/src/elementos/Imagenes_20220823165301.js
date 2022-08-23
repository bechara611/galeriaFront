import React from 'react';
import './imagenes.css'

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
                data-bs-target={"#"+index}>Abrir Modal {index}</button>

                   
                </React.Fragment>
                // return <h3 key={index}>{elemento.img}</h3>
            })}
        </div>

    </>);
}

export default ComponenteImagenes;