import Boton from "./button";

const FormularioLogin = () => {
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2'><h3>Login</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' />
        <input type="password" placeholder="PASSWORD" className='col-12 form-control' />
        </div>
         <div className="col-12 centrar2 mt-3">
         <button className="btn btn-success col-8 mt-2">LOGIN</button>
         <button className="btn btn-primary col-8 mt-2">REGISTER</button>
         </div>
         <div className="centrar2 mt-2 col-12">
        <Boton className='' fondoVerde >Recovery password</Boton>
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioLogin;