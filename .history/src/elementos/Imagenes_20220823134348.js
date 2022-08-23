import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
        <div className="container-imagen">
       { vectorFotos.map((elemento,index)=>{
        return <img className="imagen" src={elemento.img} alt="" key={index} />
                  
        // return <h3 key={index}>{elemento.img}</h3>
       })}

       </div>
        </>);
}
 
export default ComponenteImagenes;