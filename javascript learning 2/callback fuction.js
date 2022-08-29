//callback fucnctions
//a function which contains another function as argument for calling.
/*const message = function () {
    console.log("this message is shown after 3 seconds");
}
setTimeout(message,3000);*/


 setTimeout(() =>{
    console.log('3');
    setTimeout(() =>{
        console.log('2');
        setTimeout(() =>{
            console.log(1);
        }, 3000);
    }, 3000);
 }, 3000);