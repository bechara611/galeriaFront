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
                console.log(data);
                return data
            })
            resolve(resultado)
     
    } catch (error) {
        reject(error)
        console.log(error)
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
        } catch (error) {
          
            reject(error)
        }
       
    })
   
    
    
}

export {GetHacerLogin,getHacerLogin2}