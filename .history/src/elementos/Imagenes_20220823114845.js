const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
       { vectorFotos.map((elemento,index)=>{
        return <h3 key={index}>{elemento.img}</h3>
       })}
       
        </>);
}
 
export default ComponenteImagenes;