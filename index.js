//only on console
console.log("Hello There!");
//pop up
window.alert("Hello There!");

//v2- Variables and data types in JavaScript------------------------------------------

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operator)

let firstName = "Bro"; //strings
let age = 21; //number
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//v3- Arithmetic expressions in JavaScript------------------------------------------

/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;

    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let students = 20;

//students = students + 1; ==21
//students = students - 1; ==19
//students = students * 2; ==40
//students = students / 2; ==10
//students = students ** 2; ==400
//let extraStudents = students % 2; ==0

//students += 1;
//students -= 1;
//students = 2;
//students /= 2;

console.log(students);

//v4- User input in JavaScript------------------------------------------

// How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}


//v5- Type conversion in JavaScript------------------------------------------

// Type Conversion = change the datatype of a value to another
//                                   (strings, numbers, booleans)

let age2 = window.prompt("How old are you?");

//Default is string
//console.log(typeof age);
age2 = Number(age2);
age2 += 1;

document.getElementById("p4").innerHTML = "Happy Birthday! You are " + age2 + " years old";

/*
let x;
let y;
let z;

x = Number("pizza"); --> NaN (Non a Number)
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//v6- Const in JavaScript------------------------------------------

// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius);

//PI = 420.69;

document.getElementById("myButton2").onclick = function(){
    
    radius = Number(document.getElementById("myText2").value);
    circumference = 2 * PI * radius;
    document.getElementById("myLabel2").innerHTML = "The circumference is:" + circumference;
}



