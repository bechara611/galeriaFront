import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  getHacerLogin2 } from "../helpers/peticiones";
import Boton from "./button";

const FormularioLogin =({register,cambiarRegister,cambiarEstadoAlerta,cambiarTipoMensaje}) => {
   const [email,cambiarEmail]=useState("");
   const [password,cambiarPassword]=useState("");
   const [login,cambiarHizoLogin]=useState(false);
   
   
   useEffect(() => {
    
    async function Funcion(){
      let navegar = useNavigate()
    //  console.log(email)
    if (login===true) {
      const resultado = await getHacerLogin2(email,password)
      .then(data=>{
         if(data.data.Token){
            localStorage.removeItem('token');
            localStorage.setItem('token',data.data.Token)
            cambiarEstadoAlerta(true);
            cambiarTipoMensaje({tipo:'exito',mensaje:'LOGIN SUCCESS'})
         }
         
         return data.data
        
      })
      .catch(error=>{
         cambiarEstadoAlerta(true);
         cambiarTipoMensaje({tipo:'error',mensaje:error.response.data.errors.msg})
         return error.response.data.errors.msg
      })
     
      if(!resultado){
         cambiarEstadoAlerta(true);
         cambiarTipoMensaje({tipo:'error',mensaje:'Error,Check your data'})
         cambiarEmail('')
         cambiarPassword('')
      }
      
      cambiarHizoLogin(false);
    //  cambiarHizoLogin(false)
    }

    }
    Funcion();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[login])
   
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