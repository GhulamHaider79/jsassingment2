//        Chapter 5

// Question 1. Write a program that take two numbers & add them in a
//   new variable. Show the result in your browser.

var num1 = 8;
var num2 = 2;
var sum = 8 + 2;
var subtract = num1 - num2;
var multi = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;


document.write(" <h1> Question No 1 & Question No 2 </h1>")
document.write(`The sum of ${num1} and ${num2} is ${sum} </br>`)
document.write(`The Subtract of ${num1} and ${num2} is ${subtract} </br>`)
document.write(`The Multiply of ${num1} and ${num2} is ${multi} </br>`)
document.write(`The Division of ${num1} and ${num2} is ${division}</br>`)
document.write(`The Modulus of ${num1} and ${num2} is ${modulus}</br>`)

// Question No 3

document.write(" <h1> Question No 3 ")

document.write(`<h2> “Value after variable declaration is: undefined </h2>`)
document.write(`<h2>Initial value: ${num1}</h2>`)

var numSub = num1 + 1;
document.write(`<h2>Value after increment is: ${numSub}`)

var afterAddition = numSub + 1;
document.write(`<h2>Value after addition is: ${afterAddition}`)

var afterDecrement = afterAddition - 1;

document.write(`<h2>Value after Decrement is: ${afterDecrement}`)

var afteRemainder = afterDecrement % 3;

document.write(`<h2>value after remainder : ${afteRemainder}`)



// Question 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets


document.write(`<h1> Question No 4 </h1>`)

var ticketPrice = 600;

document.write(`<h2> Total cost to buy 5 ticket ${ticketPrice * 5} </h2>`)


// Question No 5. Write a script to display multiplication table of any number in your browser. E.g


var tableOf4 = (" <h2>4 * 1 = 1 </br> 4 * 2 = 8 </br> 4 * 3 = 12 </br> 4 * 4 = 16 </br> 4 * 5 = 20 </br> 4 * 6 = 24 </br> 4 * 7 = 28 </br> 4 * 8 = 32 </br> 4 * 9 = 36 </br> 4 * 10 = 40 </h2>")


document.write("<h1>Tabel of 4 </h1>")
document.write(tableOf4)


// Question 6. The Temperature Converter: It’s hot out! Let’s make a
//  converter based on the steps here.
//  a. Store a Celsius temperature into a variable.
//  b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//  c. Now store a Fahrenheit temperature into a variable.
//  d. Convert it to Celsius & output “NNoF is NNoC”.


var celsius = 97;
var fahrenheit = (celsius*(9/5))+32;

document.write("<h1> Question No 6 </h1>")

document.write(`<h3>${celsius} °C is ${fahrenheit} °F</h3>`)

var fahrenheit2nd = 30;
var celsius2nd = (fahrenheit2nd - 32) * 5/9;

document.write(`<h3> ${fahrenheit2nd} °F is ${celsius2nd} °C`)

// Question 7. Write a program to implement checkout process of a
//  shopping cart system for an e-commerce website. Store
//  the following in variables

var price1 = 650;
var price2 = 100;
var charges = 100;

document.write(" <h1> Qujestion No 7 </h1>")

document.write("<h2> Shopping cart  </h2>")

document.write(`<h3>Price of item 1 is ${price1} </br>
Quantity of item 1 is 3 </br>
Price of item 2 is ${price2} </br>
Quantity of item 2 is 7 </br>
shapping charges ${charges} </br> </br>
&nbsp Total cost of your order is ${price1*3 + price2*7 + charges} </h3>`);


// Question 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in your browser

document.write("<h1>Question No 8 </h1> ");

document.write(" <h2>Mark Sheet  </h2> ");

var totalMarks = 980;
var marksObtain = 804;

document.write(` Parcentage: ${ marksObtain * 100 / totalMarks} `);

// Question 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write( " <h1>Question No 9  </h1>");

document.write( " <h2>Currency in PKR </h2>");

document.write( `${ (10*104.80) +  (25*28)  } `);


// Question 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write(" <h1> Question No 10  </h1> ");


document.write(`${2 + 5 *10/2}`);


// Question 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

document.write(" <h1> Question No 11  </h1> ");

document.write( " <h2>  Age Calculator  </h2>");

var currentYear = 2023;
var birthYear = 1986;

document.write(` <h3> Current Year : ${currentYear} </br>
Birth Year : ${birthYear} </br>
Your age is : ${currentYear - birthYear} </h3> `)

// Question 12. The Geometrizer: Calculate properties of a circle.


document.write(" <h1> Question No 12  </h1> ");

document.write( " <h2>  The Geometrizer  </h2>");

var redius=20;
document.write(`<h4>Radius of Circle is: ${redius}<br>
Area of Circle is: ${3.142*(redius**2)}<br> 
The circumference of Circle is: ${2*3.142*(redius)}`)


document.write(" <h1> Question No 13  </h1> ");

document.write( " <h2>  Expendatue of tea for my remaining life  </h2>");

var myfood = ("tea");
var myage = 37;
var maxage = 60;
var perDay = 150;


document.write(`${((maxage - myage) * 365) * 150}`);




