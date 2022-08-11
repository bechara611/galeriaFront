import { useEffect, useState } from "react";
import { getHacerLogin2, postRegistrarUsuario } from "../helpers/peticiones";
import { useNavigate } from "react-router-dom";
import Boton from "./button";

const FormularioRegister = ({estadoAlerta,cambiarEstadoAlerta,cambiarTipoMensaje,cambiarRegister}) => {
    const [fetchRegistrar,cambiarfetchRegistrar]=useState(false);
    const [nombre,cambiarNombre]=useState('')
    const [email,cambiarEmail]=useState('')
    const [password1,cambiarPassword1]=useState('')
    const [password2,cambiarPassword2]=useState('')
    const [hizologin,cambiarHizoLogin]=useState(false)
    let navegar = useNavigate()
    useEffect(()=>{
        async function metodo(){
            if(fetchRegistrar===true){
                 await postRegistrarUsuario(nombre.toUpperCase(),email.toLowerCase(),password1)
                .then((data)=>{
                    cambiarEstadoAlerta(true);
                    //"Email already exists"
                   
                    
                      cambiarTipoMensaje({tipo:"exito",mensaje:"SUCCESS"})
                      cambiarHizoLogin(true)
                    return data
                    
                })
                .catch((error)=>{
                    cambiarEstadoAlerta(true);
                    if(error.response.data.errors.length>0){cambiarTipoMensaje({tipo:"error",mensaje:error.response.data.errors[0].msg})}
                    else if(error.response.data.errors.length===0){cambiarTipoMensaje({tipo:"error",mensaje:error.response.data.errors.msg})}
                    else{ cambiarTipoMensaje({tipo:"error",mensaje:error.response.data.errors.msg})}
                    return error})
               
                //console.log('SI REGISTRO')
                cambiarfetchRegistrar(false)
            }
        }
       metodo()
        // eslint-disable-next-line
    },[fetchRegistrar])


    useEffect(() => {
    
        async function Funcion(){
         
        //  console.log(email)
        if (hizologin===true) {
          const resultado = await getHacerLogin2(email.toLowerCase(),password1)
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
          }
          
          cambiarHizoLogin(false);
        //  cambiarHizoLogin(false)
        }
    
        }
        Funcion();
       // eslint-disable-next-line react-hooks/exhaustive-deps
       },[hizologin])
  
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>REGISTER</h3></div>
        <div className="col-12 centrar2">
        <input type="text" placeholder="NAME" className='col-12 mb-1 form-control je' value={nombre} required onChange={(e)=>{
            cambiarNombre(e.target.value);
        }} />
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' value={email} required onChange={(e)=>{
            cambiarEmail(e.target.value);
        }} />
        <input type="password" placeholder="PASSWORD" className='col-12 form-control mb-1' value={password1}  required onChange={(e)=>{
            cambiarPassword1(e.target.value)
        }}/>
        <input type="password" placeholder="REPEAT PASSWORD" className='col-12 form-control' value={password2} required onChange={(e)=>{
            cambiarPassword2(e.target.value)
        }}/>
        </div>
         <div className="col-12 centrar2 mt-3 mb-2">
         <Boton className='btn  col-8 ' fondoVerde onClick={(e)=>{
            e.preventDefault();
             if(!email || !password1 || email==='' || password1==='' || password2==='' || !password2 ){
                 cambiarEstadoAlerta(true);
                 cambiarTipoMensaje({tipo:"error",mensaje:"PLEASE, INSERT YOUR DATA"})
                 return
 
             }
             if(password1!==password2){
                cambiarEstadoAlerta(true);
                cambiarTipoMensaje({tipo:"error",mensaje:"PLEASE, CHECK YOUR PASSWORD"})
                return
             }
            cambiarfetchRegistrar(true)
           }}>REGISTER</Boton>
        
        
         </div>
         <div className="centrar2 mt-2 col-6 mb-2">
        <Boton className='col-12 col-sm-12 recovery' fondoBlanco2 onClick={(e)=>{
         
            e.preventDefault();
            //localStorage.setItem('token','Dany Bechara es el token')
            cambiarRegister(false)
          // cambiarTipoMensaje({tipo:'error',mensaje:'mensaje desde register'})
           //cambiarEstadoAlerta(true);

            
        }}>BACK</Boton>
      
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioRegister;