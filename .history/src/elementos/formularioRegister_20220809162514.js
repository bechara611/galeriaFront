import Boton from "./button";

const FormularioRegister = ({register,cambiarRegister}) => {
    return ( 

        <>
        <form action="" className='mt-2 formulario'>
        <div className='col-12 centrar2 mb-2 tituloLogin'><h3>REGISTER</h3></div>
        <div className="col-12 centrar2">
        <input type="email" placeholder="EMAIL" className='col-12 mb-2 form-control je' />
        <input type="password" placeholder="PASSWORD" className='col-12 form-control' />
        <input type="password" placeholder="REPEAT PASSWORD" className='col-12 form-control' />
        </div>
         <div className="col-12 centrar2 mt-3">
         <Boton fondoVerde className=" btn  col-8  mt-4">LOGIN</Boton>
         <Boton fondoAzul className=" btn  col-8 mt-4">REGISTER</Boton>
        
         </div>
         <div className="centrar2 mt-2 col-6">
        <Boton className='col-12 col-sm-12 recovery' fondoBlanco2 >BACK</Boton>
         </div>
         
        </form>
        
        </>
     );
}
 
export default FormularioRegister;