import './../elementos/imagenes.css'

const ComponenteImagenes = ({ cambiarvectorFotos, vectorFotos }) => {
    return (<>
        {vectorFotos.map((elemento, index) => {

            return <div className="container-imagen">
                <img src={elemento.img} alt="Snow" />
                <button className="btn">Button</button>

            </div>
            // return <h3 key={index}>{elemento.img}</h3>
        })}

    </>);
}

export default ComponenteImagenes;