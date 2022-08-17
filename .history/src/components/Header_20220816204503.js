import './Header.css'
import Heart from './../imagenes/Heart.svg'
const HeaderPrincial = () => {
  let linkdn="https://linkedin.com/in/DanyBechara";
  let blank='_blank'
    return (
       
       <header>
        <div className="container-fluid contenedor-header ">
        <div className="contenedor-menu">
        <a className='link-red linkdin'target={blank} href={linkdn}><i className="fa-brands fa-linkedin iconosRedes "></i></a>
       <p>Menu 1</p>
       <p>Menu 1</p>
        </div>
        
        </div>
        </header>
        
      );
}
 
export default HeaderPrincial;
