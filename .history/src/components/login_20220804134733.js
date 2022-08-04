const Login = () => {
    const resultado = fetch('http://localhost:8080/api/usuario',{
        method:'GET',
       // body:JSON.stringify(formData),
        headers:{'Content-type':'application/json'}
    })
    .then(resp=>resp.json())
    .then(data=>{return data})
    .catch(error=>{return error})

    console.log(resultado)
    return (  

        <>
        <h1>Dany Bechara</h1>
        </>
    );
}
 
export default Login;