import './Header.css'
import Heart from './../imagenes/Heart.svg'
const HeaderPrincial = () => {
  let linkdn="https://linkedin.com/in/DanyBechara";
  let blank='_blank'
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor-menu">
       <Heart></Heart>
       <p>Menu 1</p>
        </div>
        
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial;
