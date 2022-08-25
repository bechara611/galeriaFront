import './../components/Footer.css'
const FooterComponente = () => {
  let linkdn="https://linkedin.com/in/DanyBechara";
    let correo="mailto:bechara611@gmail.com";
    let blank='_blank';
    let github='https://github.com/bechara611';
    let whatssap='https://wa.me/584120361952';
    return (
        <>
        <footer className="container-fluid footer">
        <div className="col contenedor-footer">
        <a className='link-red linkdin'target={blank} href={linkdn}><i className="fa-brands fa-linkedin iconosRedes "></i></a>
        <a className='link-red correo' target={blank} href={correo}><i className="fa-solid fa-envelope iconosRedes"></i></a>
        <a className='link-red github' target={blank} href={github}><i className="fa-brands fa-github-square iconosRedes "></i></a>
        <a className='link-red whatssap' target={blank} href={whatssap}><i className="fa-brands fa-whatsapp"></i></a>
        </div>
        </footer>
        </>
      );
}
 
export default FooterComponente;