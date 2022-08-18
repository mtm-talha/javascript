//Objects
let person = {
    firstName :'Sohaib',
    lastName : 'Khan',
    age : 21,
 
}
//Dot Notation
 
console.log(person.age)
//Changing the property
person.age = 30
console.log(person.age)

console.log(person.firstName)

//Brackett Notation
person['firstName'] = 'Sohaib';
console.log(person.firstName);

let selection = 'firstName';
person[selection] = 'Mary';
console.log(person.firstName)