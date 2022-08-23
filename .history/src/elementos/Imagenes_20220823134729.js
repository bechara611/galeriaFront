import './imagenes.css'

const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
        
       { vectorFotos.map((elemento,index)=>{
        return <Reactfragment> 
        <img className="imagen" src={elemento.img} alt="" key={index} />
         <button className="btn btn-success">Abrir</button>
         </Reactfragment>
        // return <h3 key={index}>{elemento.img}</h3>
       })}

      
        </>);
}
 
export default ComponenteImagenes;