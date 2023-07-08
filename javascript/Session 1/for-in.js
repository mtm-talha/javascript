// The for in loop is used to iterate over the properties of an object

const person = {firstName:"John", lastName:"Smith", age:32, occupation:"Doctor"};

for (let x in person) {
  console.log(x+ ":" ,person[x]);
}

