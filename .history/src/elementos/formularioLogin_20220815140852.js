import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  getHacerLogin2, getRecoveryPassword } from "../helpers/peticiones";
import Boton from "./button";

const FormularioLogin =({register,cambiarRegister,cambiarEstadoAlerta,cambiarTipoMensaje}) => {
   const [email,cambiarEmail]=useState("");
   const [password,cambiarPassword]=useState("");
   const [login,cambiarHizoLogin]=useState(false);
   const [recovery,cambiarRecovery]=useState(false);
   let navegar = useNavigate()
   
   useEffect(() => {
    
    async function Funcion(){
     
    //  console.log(email)
    if (login===true) {
      const resultado = await getHacerLogin2(email.toLowerCase(),password)
      .then(data=>{
         if(data.data.Token){
            localStorage.removeItem('token');
            localStorage.setItem('token',data.data.Token)
       
         }
         navegar('/Gallery');
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

   useEffect(()=>{
      let token= localStorage.getItem('token')
      if(token){
          console.log('recuerda que debes colocar el navigate a galeria si ya existe un token')
          //navegar('/Gallery')
      }
      // eslint-disable-next-line
   },[])

   //useeffect para la parte de recuperacion de password
   useEffect(()=>{
      async function ejecutar(){
      if(recovery===true){
    
      await getRecoveryPassword(email)
      .then(resultado=>{
         console.log(resultado)
         return resultado})
      .catch(error=>{
         cambiarEstadoAlerta(true);
         cambiarTipoMensaje({tipo:'error',mensaje:error.response.data.errors[0].msg})
         return error.response.data.errors.msg
        })
      }

         
         cambiarRecovery(false)
      
        
      }
      
         ejecutar();
      
     
      // eslint-disable-next-line
   },[recovery])
   

    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><p className='plogin'>Login</p></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control control-imput' required value={email} onChange={(e)=>{cambiarEmail(e.target.value)}}/>
        <input type="password" placeholder="PASSWORD" className='col-12 form-control control-imput' required value={password} onChange={(e)=>{cambiarPassword(e.target.value)}} />
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
        <Boton className='col-12 col-sm-12 recovery' fondoBlanco2 onClick={(e)=>{
         e.preventDefault();
         if(!email  || email==='' ){
            cambiarEstadoAlerta(true);
            cambiarTipoMensaje({tipo:"error",mensaje:"PLEASE, INSERT YOUR EMAIL"})
            return;
         }
         cambiarRecovery(true);
        }}>Forgot password?</Boton>
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioLogin;