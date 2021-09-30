1. What is the array property that stores the number of elements present in an array?

That array property is called the Length property.

2. Which array method checks whether the value stored in a variable is an array or not? What is passed to this method? And what is returned?

The Array.isArray() determines if the passed value is an array. What is passed is that value and what is returned is whether that value is true or false of it being an array.

3. Which array method returns a new array iterator object that containsthe values of each index in the array?

That method is called Array.values(). 

Consider the following code:

```js
let movies = [
    {
        title: 'Stargate',
        category: 'Sci-Fi',
        director: 'Roland Emmerich',
        releaseDate: 1997,
    },
    {
        title: 'The Notebook',
        category: 'Romance',
        director: 'Nick Cassavetes',
        releaseDate: 2004,
    },
    {
        title: 'The Guernsey',
        category: 'Romance',
        director: 'Mike Newell',
        releaseDate: 2018,
    },
    {
        title: 'I am Legend',
        category: 'Sci-Fi',
        director: 'Francis Lawrence',
        releaseDate: 2007,
    },
    {
        title: 'High Strung Free Dance',
        category: 'Feel Good',
        director: 'Michael Damian',
        releaseDate: 2018,
    },
    {
        title: 'Dragon Heart Vengeance',
        category: 'Fantasy',
        director: 'Ivan Silvestrini',
        releaseDate: 2020,
    },
]
```

for (const value of movies) {
    console.log(value)
}
console.log(movies[3]['director'])
What does console.log(value) return to the console? Please share everythingthat each iteration of console.log(value) prints to the console. What does console.log(movies[3]["director"]) print out to the console?

This returns each of the movies both property and it’s value. The other console printed out the directors name for the movie of the third index which was “Francis Lawrence”.

Would the following console.log(value) print out the same as the previousconsole.log(value); above? Why? And does the iterator variable itself returnanything? Why?

```js
const iterator = movies.values()
for (const value of iterator) {
    console.log(value)
}
```

It seems to have returned the same thing because it seems to be asking for the same exact thing which is the value of each of the movies. It also doesn’t seem like the iteration variable didn’t return anything because it looks like it just printed the value of each movie.

5. What is a stack? What principle does it work on? And what are the twooperations that occur at the top (end) of the stack?

A stack is a data structure that holds a list of elements. Stack works on the LIFO principal, which means last in, first out. The two operations that occur are push and pop.

6. Please briefly explain what each of these stack operations does. What are the two built-in array methods associated with these operations, and what do they allow us to do?

The push operation places the element at the top of the stack, while the pop would remove an element from the top of the stack. The two array methods associate with them are push() and pop(). This helps us to use the array as a stack.

7. Consider the following code:

```js
let boardGameStack = []
boardGameStack.push('Monopoly')
boardGameStack.push('Clue')
boardGameStack.push('Risk')
boardGameStack.push('Scrabble')
boardGameStack.push('Candy Land')
boardGameStack.push('Battleship')
boardGameStack.push('Chess')
console.log(boardGameStack)
```

Which element (game) do you think is the first element in the array at index 0? And which element (game) do you think is at index 6? And what does eachinstance of the push() method return? For example, what does boardGameStack.push("Monopoly") return?

The first game would be “Monopoly” at the index of 0. The game at index 6 would be “Chess”. The push() method would return Monopoly, then Clue, next is Risk, Scrabble, Candy Land, Battleship, and lastly Chess. The boardGameStack.push(“Monopoly”) would return “Monopoly”.

8. Please explain what the push() method does and what it returns.

The push() method adds elements to the end of the array and it returns the value of the arrays length, or specifies the number of elements in the array. With the board games it was 7 elements in the array.

9. Consider the following code:

```js
let boardGameStack = [
    'Risk',
    'Battleship',
    'Candy Land',
    'Monopoly',
    'Scrabble',
    'Clue',
    'Chess',
]
```

boardGameStack.pop()
What does boardGameStack.pop(); return?

This returned nothing in the console.

10. Please explain what the pop() method does and what it returns. And whatdoes it return if the array is empty?

The pop() method removes the elements at the end of the array and it would return the element to the caller. If the array is empty it would return as undefined.

11. Consider the following code:

```js
const videoGames = [
    { game: 'Fortnite', year: 2017 },
    { game: 'Minecraft', year: 2009 },
    { game: 'Ghost of Tsushima', year: 2020 },
    { game: 'Cyberpunk 2077', year: 2020 },
    { game: 'Pac Man', year: 1980 },
    { game: 'Grand Theft Auto V', year: 2013 },
    { game: 'Overwatch', year: 2016 },
    { game: 'Tetris', year: 1984 },
]
```

const splicedGames = videoGames.splice(2, 3)
console.log(splicedGames)
console.log(videoGames)
What does videoGames.splice(2, 3), stored as the value of the variablesplicedGames return? And what elements does the videoGames array hold now? Please provide exactly what is printed to the console for bothconsole.log(splicedGames) and console.log(videoGames).

The videoGames.splice(2, 3) stored the 3 games that started at index 2 which were, Ghost of Tsushima, Cyberpunk 2077, and Pac Man. The elements the array holds now are all the other games which are Fortnite, Grand theft Auto V, Overwatch, and Tetris.

12. Please explain what is passed to the splice() method, what it does, and whatis returned. Please break down what each part of the syntax is and does as part of the description.

What’s passed to the splice() method are the existing elements that you want to delete, you can also replace elements in the array as well. It starts with picking the item you want to delete by putting in its index number which is called “start”. Then you would put in the number of elements you want to delete, this is called the “deleteCount”. Lastly it returns an array that has the deleted elements in it. The items 1 and 2 are optional and are the elements that you want to add to the array.

Syntax:

let arrDeletedItems = array.splice(start, deleteCount, item1, item2)

13. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
const addedGrades = grades.splice(2, 3)
console.log(grades)
console.log(addedGrades)
```

What does console.log(grades) return after splice() has been set on the grades array? What does console.log(addedGrades) return? In other words, whatis stored as the value of addedGrades, and what is returned as a result?

It returns the array without the grades that were splices which are [88, 92, 84, 96, 80]. The addedGrades returns the grades that were deleted from the first array which are [75, 98, 66]. What’s stored are the 3 that were deleted and they were returned as the result.

Were elements added to the grades array, removed from the grades array, both, or nothing changed in the array?

The elements were removed from the grades array because it spliced at index 2 and removed 3 which made the array length 8 and the new arrays length is 5 so they were definitely removed to there own array length of 3.

14. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
const deletedGrades = grades.splice(4, 0, 94, 70, 83)
console.log(grades)
console.log(deletedGrades)
```

What does console.log(grades) return after splice() has been set on the grades array? What does console.log(deletedGrades) return? In other words, what is stored as the value of deletedGrades, and what is returned as a result?

This returns the original grades plus 3 other grades which are [94, 70, 83] and is now [88, 92, 75, 98, 94, 70, 83, 66, 84, 96,80]. The deletedGrades returned nothing, [ ] because no element was deleted only 3 elements were added starting from index 4.

Were elements added to the grades array, removed from the grades array, both, or nothing changed in the array?

Yes elements were added to the new array and nothing was removed.

15. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
const changedGrades = grades.splice(3, 3, 94, 82, 78, 87)
console.log(grades)
console.log(changedGrades)
```

What does console.log(grades) return after splice() has been set on grades? What does console.log(changedGrades) return? In other words, what is stored as the value of changedGrades, and what is returned as a result?

It returned [88, 92, 75, 94, 82, 78, 87, 96, 80] which are the original grades up to the third index which 3 were also deleted and 4 new grades were added. The changedGrades returned [98, 66, 84] which were the 3 that were removed and replaced.

Were elements added to the grades array, removed from the grades array, both, or nothing changed in the array?

The elements from the original were removed which were the 3 now called changedGrades and 4 new elements were added starting at index 3.

16. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
const sortedGrades = grades.sort()
console.log(sortedGrades)
```

What does console.log(sortedGrades) return? Please describe.

This returned all the same grades but they are in order from smallest number to largest number.

17. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
const sortedGrades = grades.sort((a, b) => a - b)
console.log(sortedGrades)
```

What does console.log(sortedGrades) return? Please describe how the callback function passed to sort() affects the sorting order of the elements in the grades array.

This also returned the same numbers from smallest to largest number, how the callback function affects the sorting is that its comparing the the to values to get change its position. If the result is a negative number then “a” is positioned before “b”, and if it is positive, “b” is positioned before “a”.

18. Please explain what is passed to the sort() method, what it does, and what is returned. Please break down what each part of the syntax is and does as part of the description. You can also use the code in the previous exampleto provide an actual code example in addition to the syntax if you want.

The sort method helps you to sort elements in a certain order or change the position of elements in an array. It sorts starting from the smallest value to the largest value being last. The compareFunction is unposed to define the sorted order of the elements, then two  parameters are passed which are firstE1 and secondE1 which are the first and second elements to compare. Lastly it will return the array that is now sorted in order.

Syntax:

arr.sort(compareFunction(firstE1, secondE1))

19. Take the code provided in question 17, and modify it so that the gradeelements in the array are sorted in descending order.

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
const sortedGrades = grades.sort((b, a) => a - b)
console.log(sortedGrades)
```

I changed the (a, b) to now (b, a) which sorted it now from largest to smallest.

20. Consider the following code:

```js
const animaux = ['zèbre', 'abeille', 'écureuil', 'chat']
const triéAnimaux = animaux.sort((a, b) => a - b)
console.log(triéAnimaux)
```

Does the sorted animaux array stored as the value of the triéAnimaux variablereturn sorted in ascending order as expected or not? Why?

No it does not because of the French alphabet being different so it does read the same way as the English alphabet.

21. Consider the following code:

```js
const animaux = ['zèbre', 'abeille', 'écureuil', 'chat']
const triéAnimaux = animaux.sort((a, b) => b - a)
console.log(triéAnimaux)
```

Please modify the code above so that the elements in the array are sortedalphabetically in descending order as expected.

What was changed was the const triéAnimaux was taken out as well as from the console and the (a, b) parts of the sort. This then gave me the animaux in an English alphabetical order.

22. Consider the following code:

```js
const animaux = ['zèbre', 'abeille', 'écureuil', 'chat', 'abeille']
animaux.indexOf('chat')
console.log(animaux.indexOf('abeille'))
```

What does console.log(animaux.indexOf('abeille')); return? Why?

The console returned the number 1. This happened because it is calling the index of the animaux of “abeille” which would be 1.

23. Consider the following code:

```js
const animaux = ['zèbre', 'abeille', 'zèbre', 'écureuil', 'chat']
animaux.lastIndexOf('zèbre')
console.log(animaux.lastIndexOf('zèbre'))
```

What does console.log(animaux.lastIndexOf('zèbre')) return? Why?

It prints out the number 2. This happened because like the last it is asking for the index of the “zèbre”. Because there are two, I believe it is referring to the second one with the lastIndexof() it is returning the position of the “zèbre” that occurred last.

24. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
let result = grades.every((grade) => grade > 70)
console.log(result)
```

What does console.log(result) return? Why?

The console returned false. This happened because it is saying that it will return every grade if each of them or all are larger than 70, but because one of them are smaller, which is 66, it means this is false.

25. Please describe what the every() array method does and what it returns. Please break down what each part of the syntax is and does as part of the description. You can also use the code in the previous example to provide an actual code example in addition to the syntax if you want.

The every() array method test all the elements in the array pass the test that was provided by the function. It returns a Boolean value wiphich is basically either true or false. The callback is the function that test for each element and takes 3 arguments. The current element is the element that is being processed in the array. Next is the index number of the current element being processed, then the array is called and lastly is thisArg is optional and is used to reference that argument.

Syntax:

arr.every(callback(currentElement, index, array), thisArg)

26. Consider the following code:

```js
const grades = [88, 92, 75, 98, 66, 84, 96, 80]
let result = grades.some((grade) => grade > 70)
console.log(result)
```

What does console.log(result) return? Why?

The console printed true, which is correct because it is asking if the grades are larger than 70 which all of them are so it is true.

27. Please describe what the some() method does and what it returns. Please break down what each part of the syntax is and does as part of the description. You can also use the code in the previous example to provide an actual code example in addition to the syntax if you want.

The some() method test whether at least one of the elements in the array pass the test and if they do then the result will be a Boolean which again is true or false. It’s very similar to the every except the some() is only making sure that some of the elements or a few of them pass the test.

Syntax:

arr.some(callback(currentElement, index, array), thisArg)

28. Consider the following code:

```js
const numbers = [88, 92, 75, 98, 66, 84, 96, 80]
const multiplyTotal = numbers.reduce(
    (accumulator, currentEl) => accumulator * currentEl
)
```

console.log(multiplyTotal)
What does console.log(multiplyTotal) return? Please explain how the reduce()method came up with that result, breaking down what each part of the reduce() method is and does. Compare the method provided here to the reduce() method syntax as part of the description.

The console returned, “2533624676352000”. The reduce() method is used to reduce the array down to one single value, so it seem to have multiplied each of the numbers up in this case starting from 88 and multiplying the total into the next. For the reduce() method it starts with a reducerCallback which is a function that executes on each of the elements except for the first one and it takes 4 args. The accumulator accumulates the callback return value the is the current value which is the element being processed from the array, then is the index which is the index number of that element being processed and then is the array which is the reduce() being called and Lastly is the initialValue which is the value that is used as the first argument to the first callback.

Syntax:

arr.reduce(reducerCallback(accumulator, currentValue, index, array), initialValue)

29. Consider the following code:

```js
const numbers = [88, 92, 75, 98, 66, 84, 96, 80]
const sumTotal = numbers.reduceRight(function (accumulator, currentEl) {
    console.log(`accumulator: `, accumulator, `current value: `, currentEl)
    return accumulator + currentEl
})
console.log(sumTotal)
```

What does console.log(sumTotal); return? What does console.log(accumulator: , accumulator,current value: , currentEl) returnwith each call of the reduceRight() callback function? Please use each resultof that console.log() towards describing how reduceRight()reduces to sumTotal.

The console returned each of the numbers being multiples into one another then multipled by each total staring from the right or the end number which is 80. The accumulator and current value console returned each value for them as the numbers are being added into one another and that total, being the accumulator being added with the current value as they get to the final result which is 679.

30. Consider the following code:

```js
let circleRadii = [25, 43, 36]
const circleArea = (radius) => Math.floor(Math.PI * radius * radius)
console.log(circleArea)
let circleAreas = circleRadii.map(circleArea)
console.log(circleAreas)
```

What does console.log(circleAreas) return? Why? Please explain the stepsleading to the calculation of each circleArea and how the new array stored as the value of circleAreas came to be. In other words, how did the map() methodset on the circleRadii array and the circleArea arg passed to the map()method result in the new array stored as the value of the circleAreasvariable?

This returned [ 1963, 5808, 4071], because it has calculated the radius for each of the circleRadii. How it was found was by multiplying the radius. The map() method basically callbacks the function on each element in the array a returns the new array with the results inside of it.

