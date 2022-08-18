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


//v7- Math methods in JavaScript------------------------------------------

// Math =  an intrinsic object that provides basic mathematics functionality and constants

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI;

console.log(x);



//v8- Hypotenuse calculator practice program in JavaScript------------------------------------------

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}


//v9- Counter program in JavaScript------------------------------------------

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}


//v10- Random number generator in JavaScript------------------------------------------

let x2;
let y2;
let z2;

document.getElementById("rollButton").onclick = function(){

    x2 = Math.floor(Math.random() * 6) + 1;
    y2 = Math.floor(Math.random() * 6) + 1;
    z2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x2;
    document.getElementById("ylabel").innerHTML = y2;
    document.getElementById("zlabel").innerHTML = z2;
}


//v11- Useful string methods in JavaScript------------------------------------------

// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

// console.log(userName.length);
// console.log(userName.charAt(0));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);


//v12- String slicing in JavaScript------------------------------------------

// slice() extracts a section of a string 
//         and returns it as a new string, 
//         without modifying the original string

let fullName1 = "Hello There";
let firstName1;
let lastName1;

//firstName1 = fullName1.slice(0, 3);
//lastName1 = fullName1.slice(4);

firstName1 = fullName1.slice(0, fullName1.indexOf(" "));
lastName1 = fullName1.slice(fullName1.indexOf(" ") + 1);

console.log(firstName1);
console.log(lastName1);


//v13- Method chaining in JavaScript------------------------------------------

// method chaining = calling one method after another
//                                   in one continuous line of code

let userName2 = "bro";

let letter = userName2.charAt(0).toUpperCase().trim();

console.log(letter);


//v14- Javascript if statements------------------------------------------

// if statement = a basic form of decision making
//                           if a condition is true, then do something
//                           if not, then don't do it!

let age3 = 21;

if(age3 >= 65){
    console.log("You are a senior citizen!");
}
else if(age3 >= 18){
    console.log("You are an adult!");
}
else if(age3 < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
}

/*
let online = false;

if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}
*/


//v15- JavaScript checked property------------------------------------------

document.getElementById("myButton5").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
  
    if(myCheckBox.checked){
      console.log("You are subscribed!");
    }
    else{
      console.log("You are NOT subscribed!");
    }
  
    if(visaBtn.checked){
      console.log("You are paying with a Visa!");
    }
    else if(mastercardBtn.checked){
      console.log("You are paying with a Mastercard!");
    }
    else if(paypalBtn.checked){
      console.log("You are paying with PayPal!");
    }
    else{
      console.log("You must select a payment type!");
    }
  }


//v16- Javascript switches------------------------------------------

// switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements

let grade = "A";

switch(grade){
 
    case "A":
      console.log("You did great!");
      break;
   
    case "B":
      console.log("You did good!");
      break;
 
    case "C":
      console.log("You did okay!");
      break;
 
    case "D":
      console.log("You passed ... barely");
      break;
 
    case "F":
      console.log("YOU FAILED!");
      break;
 
    default:
      console.log(grade, "is not a letter grade");
}

/*
let grade = 95;

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed ... barely");
        break;

    case grade > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}
*/


//v17- Javascript strict equality operator------------------------------------------

// = assignment operator
// == comparison operator  (compare values)
// === strict equality operator  (comapre object)

let x3 = "3.14";

if(x3 === 3.14){
    console.log("That is pi");
}
else{
    console.log("That is NOT pi");
}


//v18- Javascript && AND || OR logical operators------------------------------------------

// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}


//v19- Javascript NOT logical operator------------------------------------------

// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp2 = 15;
let sunny2 = false;

if(!(temp2 > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny2){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}


//v20- Javascript while loops------------------------------------------

// while loop = repeat some code 
//                       while some condition is true
//                       potentially infinite

let userName3 = "";

while(userName3 == "" || userName3 == null){
    userName3 = window.prompt("Enter your name");
}

console.log("Hello", userName3);


//v21- Javascript do while loops------------------------------------------

// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

let userName4;

do{
    userName4 = window.prompt("Enter your name");
}while(userName4 == "")

console.log("Hello", userName4);


//v22- Javascript for loops------------------------------------------

// for loop = repeat some code a 
//            certain amount of times
/*
for(let i = 1; i <= 10; i+=1){
    console.log(i);
}
*/
for(let i = 10; i > 0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");


//v23- Javascript break and continue statements------------------------------------------

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        //break;
        //continue;
    }
    console.log(i);
}


//v24- JavaScript nested loops------------------------------------------

// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}


//v25- JavaScript functions------------------------------------------

//function = Define code once, and use it many times.
//                   To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName6 = "Bro";
    let age6 = 21;
    
    happyBirthday(userName6, age6);
}

function happyBirthday(userName6, age6){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName6);
    console.log("Happy birthday to you!");
    console.log("You are", age6,"years old!");
}


//v26- JavaScript return statement------------------------------------------

// return = returns a value back to the place 
//               where you invoked a function

let area2;
let width2;
let height2;

width2 = window.prompt("Enter width");
height2 = window.prompt("Enter height");

area2 = getArea(width2, height2);

console.log("The area is:", area2);

function getArea(width2, height2){
    return width2 * height2;
}


//v27- JavaScript ternary operator------------------------------------------


// ternary operator = Shortcut for an 'if/else statement'
//                                  Takes 3 operands
 
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
 
// condition ? exprIfTrue : exprIfFalse
 
let adult = checkAge(12);
console.log(adult);
 
function checkAge(age){
 
    return age >= 18? true : false;
}
/*
checkWinner(false);
 
function checkWinner(win){
 
    win ? console.log("You win!") : console.log("You lose!");
}
*/


//v28- JavaScript var vs let------------------------------------------


// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}
// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}

console.log(i);


//v29- JavaScript template literals------------------------------------------

// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

let userName7 = "Bro";
let items = 3;
let total = 75;

//console.log("Hello", userName7);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

//console.log(`Hello ${userName7}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

let text7 = 
`Hello ${userName7}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

//console.log(text);
document.getElementById("myLabel7").innerHTML = text7;


//v29- JavaScript format currency------------------------------------------

//JavaScript toLocaleString() currency

//toLocaleString() = returns a string with a language 
//                                sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // standard German

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);


//v30- JavaScript number guessing game------------------------------------------

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton8").onclick = function (){

  let guess = document.getElementById("guessField").value
  guesses+=1;
  
  if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guesses`);
  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!");
  }
}