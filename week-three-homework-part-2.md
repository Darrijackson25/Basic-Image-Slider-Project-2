1. Consider the following code:
```js
let time = new Date().getHours()
if (time < 12) {
    console.log(`Good morning!`)
}
console.log(time)
```
The code new Date().getHours(); represents the current hour of the day. So whenever you check it in the Console, it will show that exact time. new Date() is a new instance of the Date object, and will return the date and time at any given particular moment.

When appended to Date(), .getHours() returns the hour of the particular date being returned by new Date(). Given that information, please describe what the if statement is stating. Make sure to check the code (and your work) in the Chrome Developer Tools before finalizing your answer.

The if statement is stating that if that particular time is right now is less than 12 than the console will print "Good moring" but if not then it with just print out that time. for me it printed 16 in the console.

2. Consider the following code:

```js
let time = new Date().getHours()
if (time < 12) {
    console.log(`Good morning!`)
} else {
    console.log(`Good day!`)
}
```
Please describe what condition is necessary for the console.log() of the if statement to print out, and what is the condition necessary for the console.log() of the else statement to print out. Check the console.log() print out in Chrome Developer Tools in real time and use the result towards your answer.

For the console.log() to print the if statement, it is first asking if the time that it is right now is less than 12 then the console will print "good moring". For the else statement to print (which it did for me) the time has to be greater than 12 to print.


3. Consider the following code:

```js
let time = new Date().getHours()
if (time > 0 && time < 12) {
    console.log(`Good morning!`)
} else if (time > 12 && time < 18) {
    console.log(`Good afternoon!`)
} else if (time > 18 && time <= 23) {
    console.log(`Good evening!`)
}
console.log(time)
```
Please describe what condition is necessary for the console.log() of the if statement to print out, what is the condition necessary for the console.log() of the first else if statement to print out, and what is the condition necessary for the console.log() second else if statement to print out. Check the console.log() print out in Chrome Developer Tools in real time and use the result towards your answer.

For the if statement to print is is asking that if the time is greater than 0 and less than 12 then the console will print "good Moring". For the first else if statement to print (which is what was printed for me), the time has to be greater than 12 and less than 18. This will then print "good afternoon" in the console. lastly for the second else if statement to print the time has to be greater than 18 and equivalent to 23 to print "good evening". At the end it will then print out the correct statement, which for me was "Good afternoon" and the time is also print which was 16.


4. What are loops great for? Give two reasons why they are great.

Loops are great for doing the same task over and over to get a different value and they are also great when working with arrays bc they help to store multiple values in a variable when you are running the same code to get a different value.

5. What is a for loop and what does it basically do? Please provide the syntax for the for loop, and break down what each part of the loop stands for and does.

A for loop is basically what it sounds like which is a loop that can go on and on, it can do a task over and over. 
the syntax for a for loop:

```js
for(initialization; condition; final-expression) {
    statement
}
```
The first step to the for loop is to initialize it which executes it one time before the code block is executed. Next is step 2 which is also called condition which defines the codition or tells whether the codition is true and if it is, it will execute, but if its false the loop will stop. Lastly step 3 which is called final-expression is when the code block is exectuted then the loop will be exectuted everytime after.

6. What two characters (used in code) represent the for loop code block?

the curly braces {} are used to represent the code block for loop.

7. Consider the following code:

```js
for (let counter = 0; counter <= 20; counter++) {
    console.log(`Looping over: ${counter}`)
}
```
Please tell me what is printed out with each loop of console.log(). Also, tell me what part of the loop the let counter = 0 is, counter <= 20, and counter++. Refer to the Loops and Arrays slide deck for help.

The "looping over" then the numbers starting from 0 to 20 are being printed in the console. The let counter = 0 is the first part of the loop that is starting. The counter <= 20 is what the loop is counting up to and means that the counter which is 0 is less than or equal to 20 and the counter++ is the counter which is equal to 0, adding 1 to that to give the next number.

8. Consider the following code:

```js
let i = 0
for (; i < 24; i += 3) {
    console.log(i)
}
```
What part of the for loop is being omitted here? And which numbers print out via console.log()?

The parts being omitted are the even numbers because i which is 0 is increasing the numbers by 3. The numbers being printed are the numbers that are increased by 3 starting from 0 and stopping at 21 before 24.

9. Consider the following code:

```js
for (let j = 0; ; j += 2) {
    console.log(j)
    if (j > 30) {
        break
    }
}
```
Which part of the for loop is being omitted here? Which part of the code essentially replaces it? What stops the loop from running? Please explain. And what numbers end up being printed out to the console?

The part being omitted is the odd numbers, its being replaced with the numbers starting form 0 that are increased by 2 which are the even numbers. what stops the loop is the if statment which is if j is greater than 30 the loop will break, but because its not, its equal to 0 it kept going to after 30 and stops at 32. the numbers being printed are even numbers, or the numbers that are increased by 2.

10. Consider the following code:

```js
let i = 0
for (;;) {
    if (i === 15) break
    console.log(i)
    i++
}
```
Which part of the for loop is being omitted here? Which part of the code essentially replaces it? What stops the loop from running? Please explain. And what numbers end up being printed out to the console?

The part being omitted is when it gets to 15 the loop breaks and it stops at 14. What stops the loop from running is the if statement which is if i, which is 0, is equal to 15 than it will break and it is also being increased by 1. The numbers being printed are the numbers from 0 increased by 1 up until 14.

11. Consider the following code:

```js
let sum = 0
for (let i = 0; i <= 22; i++, sum += i);
console.log(sum)
```
What part of the for loop is being omitted here? What does console.log() print out (what is the value of sum)? Please explain how the for loop got to the result of sum.

The part that is being omitted is the loop, the console.log() printed out 276 which is the value of the sum. 276 is the result because the i being less than or equal to 22 is then being constantly increased by 1, the sum and 1 again.

12. Consider the following code:

```js
let count = 0
while (count < 25) {
    console.log(count)
    count += 2
}
```
What numbers print out to the console? Please break down what is going on inside the while loop that leads to its final result.

The numbers printed out are 2 to 24, even numbers. whats going on is that the count which is 0 is less than 25 is counting or increasing by 2 from 0 before it gets to 25, because it is less than that.

13. Consider the following code:

```js
let count = 0
do {
    count++
    console.log(`count is: ${count}`)
} while (count < 16)
```
What numbers print out to the console? Please break down what is going on inside the do while loop that leads to its final result.

the numbers 1 to 16 is printed out. In the while loop it is saying that count, which is equal to 0 is less than 16, while in the do part it is increasing by 1, so it counting up to 16.

14. Consider the following code:

```js
for (let i = 1; i < 23; i++) {
    if (i % 4 === 0) {
        console.log(i)
        break
    }
    console.log(i)
}
```
What numbers print out to the console? Please break down what is going on inside the for loop and what role break plays that leads to its final result.

The numbers 1, 2, 3, 4 are printed out. In the loop is is saying i is equal to 1 and less than 23 and it is also increasing by 1. In the if statement it is saying that if 1 divided by 4 is equal to 0 then it will break which it does at 4.

15. Consider the following code:

```js
let numString = ``
for (let i = 0; i < 15; i++) {
    if (i === 10) {
        continue
    }
    numString = numString + ' ' + i
    console.log(numString)
}
console.log(numString)
```
What numbers print out to each instance of console.log()? Please break down what is going on inside the for loop and what role continue plays that leads to its final result.

The numbers printed out are in strings starting from 0 to 0,1,2,3,4,5,6,7,8,9,11,12,13,14. In the loop i is equal to 0 and is less than 15 and is also adding 1. it is saying if i is equal to 10 then the loop will continue.

16. Consider the following code:

```js
let numString = ``
for (let i = 0; i < 15; i++) {
    if (i > 10) {
        continue
    }
    numString = numString + ' ' + i
    console.log(numString)
}
console.log(numString)
```
What numbers print out to each instance of console.log()? Please break down what is going on inside the for loop and what role continue plays that leads to its final result.

The numbers being printed are numbers 0 to 10 in a string. Whats going on in the loop is i is equal to 0 but its less than 15 and 1 is also being added to it. then its saying if i is greater than 10, the loop while continue after that and because its not, it stops.

17. Consider the following code:

```js
let day = 4
let dayName
switch (day) {
    case 1:
        dayName = `Sunday`
        break
    case 2:
        dayName = `Monday`
        break
    case 3:
        dayName = `Tuesday`
        break
    case 4:
        dayName = `Wednesday`
        break
    case 5:
        dayName = `Thursday`
        break
    case 6:
        dayName = `Friday`
        break
    case 7:
        dayName = `Saturday`
    default:
        dayName = `Day does not exist!`
}
console.log(dayName)
```
Which day will print out to the console? Why? Please break down what is going on inside the switch statement and what role break plays that leads to its final result.

The day printed is wednesday, why that is, is because of the case number being 4 like the day being equal to 4 so that day which is wednesday will print and break. The switch statement is equal to the case and the day is the number. The break just breaks the statement so nothing follows after.

18. Describe what a for in loop is used for. Use the for in loop syntax to explain what each part of the loop is and how it contributes to the functionality of the whole loop. Also describe what enumerable means in the context of the for in loop. Finally, when should one not use a for in loop?

A for in loop is used for looping over or iterating enumerable property names of any objects keyed by strings.
Syntax:

for (variable in object) {
    statement
}

The variable is the property named assigned on each iteration. Next the Objects enumerable properties are being iterated over which creates the loop. Enumerable also means any property added to an object that can be iterated over. You should not you a for in loop with arrays where order would matter.

19. Describe what a for of loop is used for. Use the for of loop syntax to explain what each part of the loop is for and how it contributes to the functionality of the whole loop. Also describe what iterable means in the context of the for of loop.

A for of loop is used for creating a loop that iterates over objects that are iterable.
Syntax:

for (variable of iterable) {
    statement
}
     
The variable is used to iterate a value of a different property and assigned to a variable. The iterable is the object that properties are iterated. Then is the statement that prints out that value. Iterable also means an object that returns a sequence of values.

20. Describe what an array is and what it is used for. Please provide an example of an array to help towards the description.

An array are objects that can be used to create list beacuse they are iterable. The are used to store multiple values in a variable and start at 0, like military time. 
Array ex: 

let colorArray = ["blue", "red", "pink", "green", "brown", "yellow", "purple"]

21. How do you access an element in an array? Please describe and show how by providing a code example. You can use the array provided in your answer to question 20 to demonstrate.

How you would access elements in an array are by using the square brackets [].
An ex:

let colorArray = ["blue", "red", "pink", "green", "brown", "yellow"]
console.log(colorArray[0]);
console.log(colorArray[1]);
console.log(colorArray[2]);
console.log(colorArray[3]);
console.log(colorArray[4]);
console.log(colorArray[5]);


22. Consider the following code:

```js
const rivers = [
    'Mississipi',
    'Missouri',
    'Yukon',
    'Rio Grande',
    'St. Lawrence',
    'Arkansas',
    'Colorado',
    'Atchafalaya',
]
rivers[3]
rivers[5]
```
Which element (river) does rivers[3] access? Which element (river) does rivers[5] access?

Rivers 3 would access Rio Grande, and Rivers 5 would access Arkansas.

23. Consider the following code:

```js
const rivers = [
    {
        length: 2340,
        river: 'Mississipi',
    },
    {
        length: 2540,
        river: 'Missouri',
    },
    {
        length: 1980,
        river: 'Yukon',
    },
    {
        length: 1900,
        river: 'Rio Grande',
    },
    {
        length: 1900,
        river: 'St. Lawrence',
    },
    {
        length: 1460,
        river: 'Arkansas',
    },
]
rivers[2].length
rivers[4].river
```
What does rivers[2].length return? And what does rivers[4].river return?

Rivers 2 length returns Yukon 1980. Rivers 4 returns St. Lawrence.

24. Consider the following code:

```js
const rivers = [
    {
        length: 2340,
        river: 'Mississipi',
    },
    {
        length: 2540,
        river: 'Missouri',
    },
    {
        length: 1980,
        river: 'Yukon',
    },
    {
        length: 1900,
        river: 'Rio Grande',
    },
    {
        length: 1900,
        river: 'St. Lawrence',
    },
    {
        length: 1460,
        river: 'Arkansas',
    },
]
for (river of rivers) {
    console.log(river)
}
```
What does the for of loop return? In other words, what does console.log(river) return? Please provide what is exactly printed out to the console.

The for of loop returns the Length and river for all of the rivers.
what it printed:
// [object object]
{
  "length": 2340,
  "river": "Mississippi"
}
// [object object]
{
  "length": 2540,
  "river": "Missouri"
}
// [object object]
{
  "length": 1980,
  "river": "Yukon"
}
// [object object]
{
  "length": 1900,
  "river": "Rio Grande"
}
// [object object]
{
  "length": 1900,
  "river": "St. Lawrence"
}
// [object object]
{
  "length": 1460,
  "river": "Arkansas"
}


25. Consider the following code:

```js
const rivers = [
    {
        length: 2340,
        river: 'Mississipi',
    },
    {
        length: 2540,
        river: 'Missouri',
    },
    {
        length: 1980,
        river: 'Yukon',
    },
    {
        length: 1900,
        river: 'Rio Grande',
    },
    {
        length: 1900,
        river: 'St. Lawrence',
    },
    {
        length: 1460,
        river: 'Arkansas',
    },
]
for (river in rivers) {
    console.log(river)
}
```
What does the for in loop return? In other words, what does console.log(river) return? Please provide what is exactly printed out to the console. And why is that returned?

The for in loop returns the numbers "0" to "5". It returning the number of rivers starting from 0, because the the for in loop is accessing the enumerbale property or basically counting it.


26. Consider the following code:

```js
const rivers = [
    'Mississipi',
    'Missouri',
    'Yukon',
    'Rio Grande',
    'St. Lawrence',
    'Arkansas',
    'Colorado',
    'Atchafalaya',
]
for (river in rivers) {
    console.log(river)
}
```
What does the for in loop return? In other words, what does console.log(river) return? Please provide what is exactly printed out to the console. And why is that returned?

The for in loop returns the numbers "0" to "7" basically counting each property starting form 0.
What printed:
"0"
"1"
"2"
"3"
"4"
"5"
"6"
"7"


27. Consider the following code:

```js
const river = {
    length: 1460,
    name: 'Arkansas',
}
for (property in river) {
    console.log(property)
}
```
What does the for in loop return? In other words, what does console.log(property) return? Please provide what is exactly printed out to the console. And why is that returned?

The for in loop returns "Length" and "name". This is returned because it is asking for the properties which are that the lenght and anme instead of the object or the river.