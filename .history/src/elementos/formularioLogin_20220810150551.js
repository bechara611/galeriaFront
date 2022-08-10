import { useEffect, useState } from "react";
import {  getHacerLogin2 } from "../helpers/peticiones";
import Boton from "./button";

const FormularioLogin =({register,cambiarRegister,cambiarEstadoAlerta,cambiarTipoMensaje}) => {
   const [email,cambiarEmail]=useState("bechara611@gmail.com");
   const [password,cambiarPassword]=useState("");
   const [login,cambiarHizoLogin]=useState();

   useEffect(() => {
    async function Funcion(){
      console.log(email)
      const resultado = await getHacerLogin2(email,password)
      .then(data=>{return data})
      .catch(error=>{return error})
      console.log(resultado)
      cambiarHizoLogin(false);
    //  cambiarHizoLogin(false)
    }
   Funcion();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [cambiarHizoLogin])
   
   // estadoAlerta={estadoAlerta}
   //          cambiarEstadoAlerta={cambiarEstadoAlerta}
   //          cambiarTipoMensaje={cambiarTipoMensaje}
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>Login</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' required value={email} onChange={(e)=>{cambiarEmail(e.target.value)}}/>
        <input type="password" placeholder="PASSWORD" className='col-12 form-control' required value={password} onChange={(e)=>{cambiarPassword(e.target.value)}} />
        </div>
         <div className="col-12 centrar2 mt-3">
         <Boton fondoVerde className=" btn  col-8  mt-2" onClick={(e)=>{
            
            e.preventDefault();
            if(!email || !password || email==='' || password==='' ){
               cambiarEstadoAlerta(true);
               cambiarTipoMensaje({tipo:"error",mensaje:"PLEASE, INSERT YOUR LOGIN DATA"})
               return

            }
           
            cambiarHizoLogin(true);
            
         }}>LOGIN</Boton>
         <Boton fondoAzul className=" btn  col-8 mt-2" onClick={(e)=>{
            e.preventDefault();
            cambiarRegister(true)
         }}>REGISTER</Boton>
         </div>
         <div className="centrar2 mt-2 col-6">
        <Boton className='col-12 col-sm-12 recovery' fondoBlanco2 >Recovery password</Boton>
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioLogin;