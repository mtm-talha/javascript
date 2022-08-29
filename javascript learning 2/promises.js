//promises
//promise contain two states 
//resolve:which uses .then when successful
//reject:which uses.catch when rejected

let a = new Promise((resolve, reject) => {
    let b =1 + 2
    if(b==3){
        resolve('success')
    }else{
        reject('failed')
    }
})
a.then((message) =>{
    console.log('this is then' + message)
}).catch((message) =>{
    console,log('this is catch' + message)
})

