import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
        
       { vectorFotos.map((elemento,index)=>{
        return <reactfragment> 
        <img className="imagen" src={elemento.img} alt="" key={index} />
         <button className="btn btn-success">Abrir</button>
         </reactfragment>
        // return <h3 key={index}>{elemento.img}</h3>
       })}

      
        </>);
}
 
export default ComponenteImagenes;