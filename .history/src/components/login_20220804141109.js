import { ObtenerUsuarios } from "../helpers/Usuarios";

const InicioDeSesion =() => {
    const respuesta =ObtenerUsuarios()
        .then(respuesta=>{return respuesta})
        .catch(error=>{return error})

    console.log(respuesta)
    return (  

        <>
        <div>
        <h2>LOGIN!!</h2>
        </div>
        </>
    );
}
 
export default InicioDeSesion;