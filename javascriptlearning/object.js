//objects
//properties of certain object
//example
//dot notation is also used as it declares any property you want
//bracket notation we can change in runtime
let person={
    firstName :'amir',
    lastName : 'afzal',
    age :'21',
}
console.log(person.firstName);
console.log(person.age);
person.age=25
console.log(person.age);
//baracket notation
person['firstName']='ali'
console.log(person.firstName)

let selection ='firstName';
person[selection]='ahmed'
console.log(person.firstName);