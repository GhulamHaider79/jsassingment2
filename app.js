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



//       Chapter 6 to 9

// Question 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:


document.write("<h1> Question  No 1 </h1>");

document.write("<h2> Result </h2>");

var mathNumber = 10;

document.write(`<h3>Value of a is ${mathNumber}</br>....................... </h3>`)

document.write(`<h3>The value of ++a is ${++mathNumber} </br> Now the velue of a is 11</h3>`);

document.write(`<h3>The value of a++ is ${mathNumber++} </br> Now the velue of a is 12</h3`)

document.write(`</br> <h3>The value of --a is ${--mathNumber} </br> Now the velue of a is 11</h3`)

document.write(`</br> <h3>The value of a-- is ${mathNumber--} </br> Now the velue of a is 10</h3`)

// Question No 2

document.write(" </br><h1> Question No 2  </h1>")

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write(`<h3>--a = 1  <br> --a - --b = 1 <br> --a - --b + ++b = 2 <br> --a - --b + ++b + b-- = 3</h3>`);


// Question No 3

var greeting = ("hello");
var userName = prompt("Enter your Name", "Name");

console.log(greeting + " " + userName);


// Question No 5

document.write("<h1> Question No 5");


var yourFirstNumber = prompt("Enter first Number", "5");

document.write(`<h3>Your number multiply by 2 is : ${yourFirstNumber* 2}  </h3>`);

// Question No 6

document.write("<h1> Question No 6 </h1>");

var subjectEnghlish = ("Enghlish");

var subjectMath = ("Math");

var subjectUrdu = ("Urdu");

var totalMarks = 100;

var obtainEnghlishMarks = 54;

var obtainUrduMarks = 48;

document.write(
    `<tabel> 
<tr> 
<th> <b>Subject</b> </th>
<th><b> Total Marks</b> </th>
<th><b>Obtain Mark</b> </th>
<th><b> Percentage</b> </th>
 </tr>
 <tr> <br>
<td>Enghlish </td>
<td> ${totalMarks} </td>
<td>${obtainEnghlishMarks} </td>
<td>${obtainEnghlishMarks*totalMarks/100}% </td>
 </tr>
 <tr> <br><br>
<td>${subjectMath} </td>
<td> ${totalMarks} </td>
<td>${obtainEnghlishMarks} </td>
<td>${obtainEnghlishMarks*totalMarks/100}% </td>
 </tr>
 <br><br>
 <td>${subjectUrdu} </td>
 <td> ${totalMarks} </td>
 <td>${obtainUrduMarks} </td>
 <td>${obtainUrduMarks*totalMarks/100}% </td>
  </tr>
 
</tabel> `)

//       Chapter 9 to 11

// Question No 1


document.write(`<h1>Chapter No 9 to 11</h1>`);

document.write(`<h2>Question No 1</h2>`);

var city =prompt("Enter your city");

if (city === "karachi"){
    console.log("welcome to city of lights")
}

// Question No 2

var gender = prompt("Enter your gender");

if (gender === "male"){
    console.log("Good Morning Sir.")
}
else if (gender === "female") {
    console.log(" Good morning Ma'am. ")
}


// Question No 3

document.write(`<h1>Questin No 3</h1>`)

var color = prompt("Enter your color")

if (color === "red" ){
    document.write("Must stop")
}
else if(color === "yellow"){
   document.write(" Redy to move")
}
else if (color === "green"){
  document.write("  Move now")
}
else{
   document.write(" please enter right color")
}


// Question No 4

document.write(`<h1>Questin No 4</h1>`)

var fuel = prompt("Enter your remaining fuel")

if (fuel === "0.25 litres" ){
    document.write("“Please refill the fuel in your car”")
}
else{
   document.write(" You can carry on");
}


// Question No 5

document.write(`<h1>Questin No 5</h1>`)

var a = 4;
if(++a === 5){
    alert("given condition for variable is true")
}

var b = 82;
if(b++ === 83){
    alert("given condition for variable is true")
}

var c = 12;
if(c++ === 13){
    alert("Condition 1 is true")
}
if(c === 13){
    alert("Condition 2 is true")
}
if(++c === 14){
    alert("Condition 3 is true")
}
if(c === 14){
    alert("Condition 4 is true")
}


// Question No 6

document.write(`<h1>Questin No 6</h1>`)

var firstSubject = +prompt("Enter your first subjects obtain numbers");
var secondSubject = +prompt("Enter your second subjects obtain numbers");
var thirdSubject = +prompt("Enter your third subjects obtain numbers");
var totalObatinNumber = (firstSubject + secondSubject + thirdSubject);
var totalMarks1Subjects = +prompt("Enter total marks of first subject");
var totalMarks2Subjects = +prompt("Enter total marks of second subject");
var totalMarks3Subjects = +prompt("Enter total marks of third subject");
var totalMarksOfAllSubject = (totalMarks1Subjects + totalMarks2Subjects + totalMarks3Subjects);

var parcentage = ( totalObatinNumber * 100 /totalMarksOfAllSubject + "%");


document.write(`<h1>Marks Sheet </h1>`);

document.write("Total Marks :" +totalMarksOfAllSubject  + "<br>");

document.write("Marks Obtain :" + totalObatinNumber + "<br>");

document.write("Percentage :" + parcentage + "<br>");

if ( parcentage >= "80%"){
    document.write("Grade : A-One  <br> Remarks : Excellent ")
}
else if ( parcentage >= "70%"){
    document.write("Grade : A  <br>  Remarks : Good" )
}
else if ( parcentage >= "60%"){
    document.write("Grade : B  <br> Remarks : You need to improve")
}
else if ( parcentage < "60%"){
    document.write("Grade : Fail <br> Remarks : Sorry")
}














