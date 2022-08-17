import './Header.css'
import {ReactComponent as Heart} from './../imagenes/Heart.svg'
const HeaderPrincial = () => {
  let linkdn="https://linkedin.com/in/DanyBechara";
  let blank='_blank'
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor-menu">
       <Heart></Heart>
       <Heart></Heart>
       <Heart></Heart>
       <p>Menu 1</p>
        </div>
        
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial;
