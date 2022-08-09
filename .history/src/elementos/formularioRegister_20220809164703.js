import Boton from "./button";

const FormularioRegister = ({register,cambiarRegister,activarMensaje}) => {
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
         <Boton fondoVerde className=" btn  col-8  mt-4">CREATE</Boton>
        
        
         </div>
         <div className="centrar2 mt-2 col-6 mb-2">
        <Boton className='col-12 col-sm-12 recovery' fondoBlanco2 onClick={(e)=>{
            e.preventDefault();
           // cambiarRegister(false)
            activarMensaje(true)
           // activarMensaje()
        }}>BACK</Boton>
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioRegister;