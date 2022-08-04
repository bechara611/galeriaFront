const Login = () => {
    fetch('http://localhost:8080/api/usuario',{
        method:'GET',
       // body:JSON.stringify(formData),
        headers:{'Content-type':'application/json'}
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
    return (  

        <>
        <h1>Dany Bechara</h1>
        </>
    );
}
 
export default Login;