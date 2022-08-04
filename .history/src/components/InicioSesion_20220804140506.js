const LoginSesion = () => {
    const resultado = fetch('http://localhost:8080/api/usuario',{
        method:'GET',
       // body:JSON.stringify(formData),
        headers:{'Content-type':'application/json'}
    })
    .then(resp=>resp.json())
    .then(data=>{return data})
    .catch(error=>{return error})
   console.log(resultado)

    return(
        <>
        <div>
            <h2>Dany</h2>
            <h3>bECHARA</h3>
        </div>
    </>);
}

export default LoginSesion;
