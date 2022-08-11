import axios from "axios";

//con fetch, posiblemente no funciona
const GetHacerLogin=async(email,password)=>{
    return new Promise(async(resolve,reject)=>{
    try {
       
            const resultado = await fetch(process.env.REACT_APP_BACK+'api/login/'+ new URLSearchParams({
                email: email,
                password: password,
            }))
            .then(data=>data.json())
            .then(data=>{
              // console.log(data);
                return data
            })
            resolve(resultado)
     
    } catch (error) {
        reject(error)
      //  console.log(error)
    }
})
}


const getHacerLogin2=async(email,password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const instance= axios.create({
                baseURL:process.env.REACT_APP_BACK+'api/login/',
                method:'GET',
                params:{
                    'email':email,
                    'password':password,
                }
            })
            const respuesta= await instance.get();
            
            
            resolve(respuesta)
            return respuesta;
        } catch (error) {
          
            reject(error)
        }
       
    })
   
    
    
}



const postRegistrarUsuario2=async(name,email,password)=>{
    return new Promise(async(resolve,reject)=>{
        //process.env.REACT_APP_BACK+'api/usuario/',
        try {
            console.log(name)
            console.log(password)
            console.log(email)
            const body={nombre:name,correo:email,password:password}
            const response = await axios.post(process.env.REACT_APP_BACK+'api/usuario/', body)
            
            
            resolve(response)
            return response;
        } catch (error) {
          
            reject(error)
        }
       
    })
   
    
    
}

export {GetHacerLogin,getHacerLogin2,postRegistrarUsuario2}