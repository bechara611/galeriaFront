const Modal = ({id}) => {
    return (
        <div className="modal" id={id} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog modal-lg text-center">
                <div className="modal-content text-center">
                    <div className="modal-header text-center justify-content-center">
                        <h5 className="modal-title text-center ">{objeto.nombre}</h5>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Carousel objeto={objeto} idCaro={idCaro}></Carousel>

                        <p className="my-5">{objeto.descripcionModal}</p>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center">
                    {
                        botonLink===true
                        ?
                        <a href={objeto.link} target="blank" className="btn btn-success">Link</a>
                        :
                        <a href={descarga} download={descarga} className="btn btn-dark">Sample report</a>
                      
                    }
                        
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Modal;