import { ObtenerTodosLosUsuarios } from "../helpers/Usuarios";

const InicioDeSesion = () => {


    return (

        <>
            <div className="container-fluid ">

                <h1 onClick={async()=>{
                   const resultadp= await ObtenerTodosLosUsuarios()
                    .then(data=>{return data})
                    .catch(error=>{return error})
                    console.log(resultadp.data)
                }}>Login de usuario</h1>
                <h3>{process.env.REACT_APP_BASEURL}</h3>

            </div>
        </>
    );
}

export default InicioDeSesion;