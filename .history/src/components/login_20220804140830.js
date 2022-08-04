import { ObtenerUsuarios } from "../helpers/Usuarios";

const Login = async() => {
    const respuesta =ObtenerUsuarios();
    return (  

        <>
        <div>
        <h2>LOGIN!!</h2>
        </div>
        </>
    );
}
 
export default Login;