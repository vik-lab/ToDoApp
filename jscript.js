// Example code snippet for conditional statements
let num = Number(prompt("Enter a number: "));
if (num < 10) {
    console.log("The number is small");
} else if (num < 100)       {
    console.log("The number is medium");
} else {
    console.log("The number is large");
}

//  while loop example for (let number = 0; number < 5; number++) { console.log(number); }
let number = 0;
while (number < 5) {
    console.log("Current number: " + number);
    //number++;
    number = number + 1;
}

//another way smarter way to write the above while loop
for (let number = 0; number <= 12; number = number + 2) {
console.log(number);
}

// Prompting user until a valid name is entered do-while loop example
let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// Calculating power of 2 using while loop

let result1 = 1;
let counter = 0;
while (counter < 10) {
result = result1 * 2;
counter = counter + 1;
}
console.log(result);
// → 1024

// smarter way to write the above code using for loop
let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
result = result2 * 2;
}
console.log(result);
// → 1024
//switch case example
let day = prompt("What day is it today?");
switch (day) {
case "Monday":
console.log("Start of the work week");
break;
case "Wednesday":
console.log("Midweek day");
break;
case "Friday":
console.log("End of the work week");
break;
default:
console.log("Just another day");
break;
}

// Weather and To-Do List Application Script

async function getWeather(city) {
  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  if (!response.ok) {
    throw new Error(`Error fetching weather for ${city}: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getTime(city) {
  const response = await fetch(`https://worldtimeapi.org/api/timezone/${city}`);
  if (!response.ok) {
    throw new Error(`Error fetching time for ${city}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.datetime;
}

async function showTimes() {
  try {
    const austinTime = await getTime('America/Chicago');
    const aucklandTime = await getTime('Pacific/Auckland');
    document.getElementById('austin-time').textContent = new Date(austinTime).toLocaleTimeString();
    document.getElementById('auckland-time').textContent = new Date(aucklandTime).toLocaleTimeString();
  } catch (error) {
    console.error(error);
    document.getElementById('austin-time').textContent = 'Failed to load';
    document.getElementById('auckland-time').textContent = 'Failed to load';
  }
}           

// looping traingle 1st part is binding and 2nd part is the condition 3rd part is the increment
for (let line = "#"; line.length < 8; line += "#"){
    console.log(line);
}

// fizzbuzz problem
for (let a = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("fizzbuzz");
    } else if (a % 3 === 0) {
        console.log("fizz");
    } else if (a % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(a);
    }
}
// === strict equality operator checks for both value and type equality
// == loose equality operator checks for value equality only

/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.*/

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// function minimum
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

function countBs(string) {
    console.log(string.split("B").length - 1);
}
countBs("BBC");
// → 2

function countChar(string, char) {
    console.log(string.split(char).length - 1);
}
countChar("klBBCaus", "B");

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log(" okay \n ".trim());
// → okay
console.log(String(6).padStart(3, "0"));
// → 006
// split and join example
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b
let numbers = [1, 2, 3];
console.log(max(...numbers));
// → 3

//json example
let string1 = JSON.stringify({squirrel: false, events: ["weekend", "work", "touched tree", "pizza"]});
console.log(string1);
// → {"squirrel":false,"events":["weekend","work","touched tree","pizza"]}
console.log(JSON.parse(string1).events);
// → ["weekend", "work", "touched tree", "pizza"]
//range function
function range(start, end, step = 1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

function repeatLog(n) {
for (let i = 0; i < n; i++) {
console.log(i);
}
}
/*But what if we want to do something other than logging the numbers? Since
“doing something” can be represented as a function and functions are just
values, we can pass our action as a function value.*/
function repeat(n, action) {
for (let i = 0; i < n; i++) {
action(i);
}
}
repeat(3, console.log);

/*Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping.*/
function loop(value, test, update, body) {
for (let current = value; test(current); current = update(current)) {
body(current);
}
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1