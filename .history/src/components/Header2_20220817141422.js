import './Header2.css'
// import your fontawesome library
import  './../helpers/fontawesome';

const HeaderPrincial2 = () => {
 
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor2 container">
        <div className="contenedor-titulo">
        <h5>Gallery App</h5>
      
        </div>
        
        <div className="contenedor-menu">
       <div className="cajaIcono">
       <i className="fa-solid icono-Salir fa-arrow-right-from-bracket"></i>
       <p>Logout</p>
       </div>
        </div>
        </div>
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial2;
