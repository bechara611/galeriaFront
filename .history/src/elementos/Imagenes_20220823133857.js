import './../elementos/imagenes.css'

const ComponenteImagenes = ({ cambiarvectorFotos, vectorFotos }) => {
    return (<>
        {vectorFotos.map((elemento, index) => {

            return <div class="container-imagen">
                <img src={elemento.img} alt="Snow" />
                <button class="btn">Button</button>

            </div>
            // return <h3 key={index}>{elemento.img}</h3>
        })}

    </>);
}

export default ComponenteImagenes;