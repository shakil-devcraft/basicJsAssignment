// 1. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

console.log(carName);






// 2. On one single line, declare three variables with the following names and values:

// firstName = "John";
// lastName = "Doe";
// age = 35;

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Doe"; //write variable values 
let age = 35 ; // write variable name and values both

console.log(firstName + " " + lastName + " " + age);






// 3 Use the correct assignment operator that will result in x being 50 (same as x = x * y).

x = 10;
y = 5;
console.log(x = x * y); // value 50







// 4 Use comments to describe the correct data type of the following variables:

let length = 16; // data type ? 
console.log(typeof length); // number

let secondName = "Johnson"; // data type ? 
console.log(typeof lastName); // string

const z = {
  firstName: "John",  
  secondName: "Doe"
};    // data type ? 
console.log(typeof z); // object






// 5 Execute the function named myFunction.
 
function myFunction() {
 alert("Hello World!");
}

myFunction();
// call the function and see the output 
// console.log(myFunction); // output by DOM alert then see (Hello World!) if you see it by browser web page. And if you see it by console.log then output [Function: myFunction]






// number 6 
// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

const person = {
    name: "John",
    age: 50
};

function alertMessage() {
    alert(person.name + " is " + person.age);
}

alertMessage();






// 7
// 1. The <button> element should do something when someone clicks on it. Try to fix it!

<button onclick="showMessage()">Click me.</button>

function showMessage(){
    alert("This button click work successfully!");
}







// 8
// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford";

console.log(Brand);








// 9
// 1. Use the correct Math method to create a random number.
let randomMath = Math.random();
console.log(randomMath);

// 2. Use the correct Math method to return the largest number of 10 and 20.
let maxMethod = Math.max(10, 20);
console.log(maxMethod);

// 3. Use the correct Math method to get the square root of 9.
let squareMethod = Math.sqrt(9);
console.log(squareMethod);







// 10
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;

if(x > y){
    alert("when x is greater than y " + true); // x > y  
}



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let checkAge = 18;
checkAge < 18 ? alert("Too young") : alert("Old enough");

