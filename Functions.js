const half = function(n) {
      return n / 2;
};
let n = 10;
console.log(half(100));
console.log(n);
//local variable not executed in the function eg.( console.log(n))
 
// The function returns the product of a and b
function myNumber (a, b) { 
      return a * b};
console.log(myNumber(10, 4));

function name(parameter1, parameter2, parameter3) {
      // code to be executed
    }

    function myFunction(name) {
      console.log("Hello " + name + "!");
    }
    myFunction("world")

//Alert "John" by extracting information from the person object.
    var person = {
      firstName: "John",
      lastName: "Doe"
    };
    
    console.log(
    person.firstName
    );


//Create an object called person with name = lakehub, age = 5, status = single
//Then, access the object to alert("lakehub is 5 years old and he is single")
    var person = { name: "lakehub", age: 5, status: `single` }; 
    console.log(person.name + " is " + person.age + " years old" + " and he is " + person.status);

    
  
  function myFunction(a, b) {
        return a * b; }
  console.log(myFunction(2,3));const num =[ 1, 2, 3, 4];
  const our_digit = num.map(num => num + 2);
  console.log(num);
  console.log(our_digit);
  


  const num =[ 1, 2, 3, 4];
const our_digit = num.map(num => num + 2);
console.log(num);
console.log(our_digit);



  function myFunction(a, b) {
     if (a % b ===0 ) {
           return true;
     } else {
      console.log(`${a} is not a multiple of ${b}`)    
     }
 
};
  myFunction(20,3);
