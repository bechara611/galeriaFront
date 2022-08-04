import { ObtenerUsuarios } from "../helpers/Usuarios";

const InicioDeSesion = async() => {
    const respuesta =ObtenerUsuarios();
    return (  

        <>
        <div>
        <h2>LOGIN!!</h2>
        </div>
        </>
    );
}
 
export default InicioDeSesion;