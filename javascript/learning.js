//functions
// const name="junaid"
// const printName=(name)=>{
//     console.log(`I am ${name}`)
// }
// function (name)=>{
//     console.log(`I am ${name}`)
// }
//variables
// let, var const
// const number=5
// var number=5
// let number=5
// number=10
// console.log("number",number)

//conditions
// if(name=="hamza"){
//     console.log("sialkot")
// }
// else if(name==="talha"){
//     console.log("islamabad")
// }
// else     console.log("pakistan")
// switch (name) {
//     case 'hamza':
//         console.log("sialkot")
//         break;
//     case 'talha':
//         console.log("islamabad")
//         break;
//     default:
//         console.log("pakistan")
//         break;
// }
// name==='hamza' ? console.log("sialkot"):name==='talha'? console.log("islamabad"): console.log("pakistan")


//array of object
const students=[{
    id:1,
    name:'syed hamza',
    class:'10',
    address:'sialkot'
},{
    id:2,
    name:'muhammad ch hamza',
    class:'11',
    address:'islamabad'
},
{
    id:3,
    name:'ahmed',
    class:'10',
    address:'islamabad'
},
{
    id:4,
    name:'junaid',
    class:'11',
    address:'islamabad'
}]
// loops
// for(let i in students){
//     if(students[i].class==10){
//         console.log(students[i])
//     }
// }
// for(let i of students){
//     if(i.class==10){
//         console.log(i)
//     }
// }
// for(let i=0;i<students.length;i++){
    //     if(students[i].class==10){
//         console.log(students[i])
//     }
// }
// students.forEach(element => {
//     if(element.class===10){
//         console.log(element)
//     }
// });
// students.map(student=>{
//     if(student.class==10){
//         console.log(student)
//     } 
// })
// es6 loops =>map, filter, find, some, reduce, every
// console.log(students.find(student=>student.class==10))

// const arr= [1,1,2,3,4,5,6,7,8,9]
// console.log(
//     arr.filter(function(x){
//     return x!=1
// })
// )