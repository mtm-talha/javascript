const addNumber = (a,b,c,...restNos) =>{
    console.log(restNos[2])
    return a+b+c;

}
const rest = addNumber(6,3,8,33,53,343)    
console.log(rest)