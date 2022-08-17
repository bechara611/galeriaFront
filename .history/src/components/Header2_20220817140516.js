import './Header2.css'
// import your fontawesome library
import  './../helpers/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {ReactComponent as Heart} from './../imagenes/Heart.svg'
const HeaderPrincial2 = () => {
 
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor2 container">
        <div className="contenedor-titulo">
        <h5>Gallery App</h5>
      
        </div>
        
        <div className="contenedor-menu">
       <i className=" link-red fa-brands fa-linkedin iconosRedes "></i>
       <i className=" link-red fa-brands fa-linkedin iconosRedes "></i>
       <FontAwesomeIcon icon={['fal', 'code']} size="2x" />
       <FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon>
       <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
        </div>
        </div>
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial2;
