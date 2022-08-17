import './Header.css'
import {ReactComponent as Heart} from './../imagenes/Heart.svg'
const HeaderPrincial = () => {
  let linkdn="https://linkedin.com/in/DanyBechara";
  let blank='_blank'
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor-menu">
       <Heart className='heart'></Heart>
       <a className='link-red linkdin'target={blank} href={linkdn}><i className="fa-brands fa-linkedin iconosRedes "></i></a>
       <p> className='link-red'Menu 1</p>
       <Heart></Heart>
        </div>
        
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial;
