/*
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
*/ 

let electricityBill=1500

if (electricityBill<=1000)
{
    console.log('Your bill is less than 1000')

}
else if (electricityBill>1000 && electricityBill<=2000)
{
    console.log('Your bill is less than 2000')

}
else if (electricityBill>2000 && electricityBill<=3000)
{
    console.log('Your bill is less than 3000')

}
else{
    console.log('Your bill has exceeded 3000')
}