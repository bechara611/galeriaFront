import { useEffect, useState } from "react";
import Boton from "./button";

const FormularioRegister = ({estadoAlerta,cambiarEstadoAlerta,cambiarTipoMensaje,cambiarRegister}) => {
    const [fetchRegistrar,cambiarfetchRegistrar]=useState(false);
    useEffect(()=>{
        if(fetchRegistrar===true){
            console.log('SI REGISTRO')
            cambiarfetchRegistrar(false)
        }
        // eslint-disable-next-line
    },[fetchRegistrar])
  
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>REGISTER</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' required />
        <input type="password" placeholder="PASSWORD" className='col-12 form-control'  required/>
        <input type="password" placeholder="REPEAT PASSWORD" className='col-12 form-control' required/>
        </div>
         <div className="col-12 centrar2 mt-3 mb-2">
         <Boton className='btn  col-8 ' fondoVerde onClick={(e)=>{
            e.preventDefault();
            // if(!email || !password || email==='' || password==='' ){
            //     cambiarEstadoAlerta(true);
            //     cambiarTipoMensaje({tipo:"error",mensaje:"PLEASE, INSERT YOUR LOGIN DATA"})
            //     return
 
            //  }
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