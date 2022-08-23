const ComponenteImagenes = ({cambiarvectorFotos,vectorFotos}) => {
    return (  <>
       { vectorFotos.map((elemento,index)=>{
        return <img src={elemento.img} alt="" key={index} />
        // return <h3 key={index}>{elemento.img}</h3>
       })}
       
        </>);
}
 
export default ComponenteImagenes;