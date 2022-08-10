import { useState } from "react";
import Boton from "./button";

const FormularioLogin = ({register,cambiarRegister,cambiarEstadoAlerta,cambiarTipoMensaje}) => {
   const [email,cambiarEmail]=useState('');
   const [password,cambiarPassword]=useState('');
   // estadoAlerta={estadoAlerta}
   //          cambiarEstadoAlerta={cambiarEstadoAlerta}
   //          cambiarTipoMensaje={cambiarTipoMensaje}
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>Login</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' required  onChange={(e)=>{cambiarEmail(e.value)}}/>
        <input type="password" placeholder="PASSWORD" className='col-12 form-control' required  onChange={(e)=>{cambiarPassword(e.value)}} />
        </div>
         <div className="col-12 centrar2 mt-3">
         <Boton fondoVerde className=" btn  col-8  mt-2" onClick={(e)=>{
            console.log(email)
            console.log(password)
            e.preventDefault();
            if(!email || !password || email==='' || password==='' ){
               cambiarEstadoAlerta(true);
               cambiarTipoMensaje({tipo:"error",mensaje:"PLEASE, INSERT YOUR LOGIN DATA"})

            }
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