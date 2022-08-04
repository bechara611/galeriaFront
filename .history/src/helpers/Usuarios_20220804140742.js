const ObtenerUsuarios =async()=>{

    const resultado = await fetch('http://localhost:8080/api/usuario',{
        method:'GET',
       // body:JSON.stringify(formData),
        headers:{'Content-type':'application/json'}
    })
    .then(resp=>resp.json())
    .then(data=>{return data})
    .catch(error=>{return error})
  return resultado

}

export {ObtenerUsuarios}