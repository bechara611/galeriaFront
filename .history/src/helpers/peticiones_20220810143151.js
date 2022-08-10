const GetHacerLogin=async(email,password)=>{
    try {
        return new Promise(async(resolve,reject)=>{
            const resultado = await fetch(REACT_APP_BACK+'api/login/'+ new URLSearchParams({
                email: email,
                password: password,
            }))
            .then(data=>data.json())
            .then(data=>{
                console.log(data);
                return data
            })
            resolve(resultado)
        })
    } catch (error) {
        reject(error)
        console.log(error)
    }

}

export {HacerLogin}