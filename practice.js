const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const message = false

        if(message){
            resolve('success')
        }else{
            reject('failure')
        }
    })
})

myPromise.then((result)=>{
    console.log("Success: ",result);
})

.catch((error)=>{
    console.log("Error:",error);
})