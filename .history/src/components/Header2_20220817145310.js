import './Header2.css'
// import your fontawesome library


const HeaderPrincial2 = () => {
 
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor2 container">
        <div className="contenedor-titulo">
        <h1>Gallery App</h1>
      
        </div>
        
        <div className="contenedor-menu">
        <div className="cajaIcono">
        <i className="fa-solid icono fa-user-pen"></i>
        
        <p className='textoIcono'>User</p>
        </div>
       <div className="cajaIcono">
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
