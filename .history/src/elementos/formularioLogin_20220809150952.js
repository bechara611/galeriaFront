import Boton from "./button";

const FormularioLogin = () => {
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>Login</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' />
        <input type="password" placeholder="PASSWORD" className='col-12 form-control' />
        </div>
         <div className="col-12 centrar2 mt-3">
         <Boton fondoVerde className="col-8 col-sm-12 mt-2">LOGIN</Boton>
         <Boton fondoAzul className="col-8 col-sm-12 mt-2">REGISTER</Boton>
         </div>
         <div className="centrar2 mt-2 col-6">
        <Boton className='col-12 recovery' fondoBlanco >Recovery password</Boton>
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioLogin;