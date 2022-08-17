import './Header.css'
import {ReactComponent as Heart} from './../imagenes/Heart.svg'
const HeaderPrincial2 = () => {
  let linkdn="https://linkedin.com/in/DanyBechara";
  let blank='_blank'
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor-menu">
       <Heart className='heart'></Heart>
      
       <i className=" link-red fa-brands fa-linkedin iconosRedes "></i>
      
       <Heart></Heart>
        </div>
        
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial2;
