import { ObtenerUsuarios } from "../helpers/Usuarios";

const InicioDeSesion =() => {
    
   
    return (  

        <>
        {
          

        }
        <div>
        <h2 onClick={async()=>{
            const respuesta = await ObtenerUsuarios()
            .then(respuesta=>{return respuesta})
            .catch(error=>{return error})
            console.log(respuesta)
        }}>LOGIN!!</h2>
        </div>
        </>
    );
}
 
export default InicioDeSesion;