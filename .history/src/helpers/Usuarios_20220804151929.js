import axios from "axios"

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
const ObtenerTodosLosUsuarios=async()=>{
  const instance= axios.create({
    baseURL:'http://localhost:8080/api/usuario',
    method:'GET',
    // params:{
    //     'access_token':process.env.REACT_APP_MAPBOXKEY,
    //     'limit':5,
    //     'language':'es'
    // }
  })
  const respuesta= await instance.get();
 
}


export {ObtenerUsuarios,ObtenerTodosLosUsuarios}