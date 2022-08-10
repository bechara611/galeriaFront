import { useState } from "react";
import Boton from "./button";

const FormularioLogin = ({register,cambiarRegister}) => {
   const [email,cambiarEmail]=useState(null);
   const [password,cambiarPassword]=useState(null);
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>Login</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' required value={email} onChange={(e)=>{cambiarEmail(e.value)}}/>
        <input type="password" placeholder="PASSWORD" className='col-12 form-control' required value={password} onChange={(e)=>{cambiarPassword(e.value)}} />
        </div>
         <div className="col-12 centrar2 mt-3">
         <Boton fondoVerde className=" btn  col-8  mt-2" onClick={(e)=>{
            e.preventDefault();
            if(!email || !password){
               
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