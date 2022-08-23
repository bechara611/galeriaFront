import React from 'react';
import './imagenes.css'

const ComponenteImagenes = ({ cambiarvectorFotos, vectorFotos }) => {

    return (<>
        <div className='contenedor-imagenes'>
            {vectorFotos.map((elemento, index) => {
                return <React.Fragment key={index}>
                    <img className="imagen" src={elemento.img} alt="" key={index}
                        data-bs-toggle="modal"
                        data-bs-target={"#"+elemento.img}
                        onClick={(e) => {
                            console.log(elemento)
                        }}></img>
                        <button className="btn btn-primary btn-lg" 
                data-bs-toggle="modal"
                data-bs-target="#modal11">Abrir Modal 1</button>

                    <div className="modal fade"
                        id="modal11"
                        tabIndex="-1"
                        aria-hidden="true"
                        aria-labelledby="label-modal-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <h1>Dany Bechara</h1>
                        </div>
                    </div>
                    </div>
                </React.Fragment>
                // return <h3 key={index}>{elemento.img}</h3>
            })}
        </div>

    </>);
}

export default ComponenteImagenes;