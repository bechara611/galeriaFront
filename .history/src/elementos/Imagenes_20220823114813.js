const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
       { vectorFotos.map((elemento,index)=>{
        return <h3>{elemento.img}</h3>
       })}
       
        </>);
}
 
export default ComponenteImagenes;