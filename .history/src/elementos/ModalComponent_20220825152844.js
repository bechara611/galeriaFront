import './ModalComponente.css'

const Modal = ({index,elemento}) => {
    const blank='_blank'
    let link = ''
    let split= elemento.img.split('/');
    split[5]=split[5]+'/fl_attachment'
    link=split.join('/')
    console.log(link)
    return (
        <div className="modal" id={"Modal-"+index} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog modal-lg text-center">
                <div className="modal-content text-center">
                    <div className="modal-header text-center justify-content-center">
                        <h5 className="modal-title text-center ">PHOTO</h5>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                    <div className="row centrarModal">
                    <img className="imagenModal" src={elemento.img} alt='Loading...'></img>
                    </div>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center">
                    {
                        // /https://res.cloudinary.com/dscpbsjbj/image/upload/v1661356252/ebxjwicihs7rpedwceft.jpg
                        <>
                  <a href={elemento.img} target={blank} className='btn btn-success btn-sm'>Open</a>
                
                  <a href="https://res.cloudinary.com/demo/image/upload/fl_attachment/sample.jpg">Download</a>
                 
                  </>
                    }
                        
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Modal;