const InicioDeSesion = () => {
console.log(process.env.REACT_APP_TEXTO)

    return (

        <>
            <div className="container-fluid ">

                <h1>Login de usuario</h1>
                <h3>{process.env.REACT_APP_BASEURL}</h3>

            </div>
        </>
    );
}

export default InicioDeSesion;