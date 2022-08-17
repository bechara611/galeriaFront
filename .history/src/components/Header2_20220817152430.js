import './Header2.css'
import {useNavigate } from 'react-router-dom'
// import your fontawesome library


const HeaderPrincial2 = () => {
  let navegar = useNavigate();
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor2 container">
        <div className="contenedor-titulo">
        
        <p className='Roses'>Roses</p>
        </div>
        
        <div className="contenedor-menu">
        <div className="cajaIcono">
        <i className="fa-solid icono fa-user-pen"></i>
        
        <p className='textoIcono'>User</p>
        </div>
       <div className="cajaIcono" onClick={(e)=>{
        localStorage.removeItem('token');
        navegar('/')}}>
       <i className="fa-solid icono fa-arrow-right-from-bracket"></i>
       <p className='textoIcono'>Logout</p>
       </div>
      
      

        </div>
        </div>
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial2;
