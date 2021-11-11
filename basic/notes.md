# Notes

## Variables

There are 3 types of variables.  They are `var`, `let`, and `const`.  Not using any of these is the same as using `var`.

### var

`var` is used to create a variable that can be overriden later with a new value.

```js
var x = 3
var x = 4
```

### let

`let` is used to define a variable only once, but its value can be changed many times

```js
let x = 3
let x = 4 // this produces an error
Uncaught SyntaxError: Identifier 'x' has already been declared
x = 4 // this is how you re-use x without redefining it
```

### const

`const` creates a new constant that can never be changed for the duration of the program

```js
const greeting = "Hello"
const greent = "salam"
Uncaught SyntaxError: Identifier 'greeting' has already been declared
```

## Data types

JavaScript supports 5 different kinds of variables.  They are `number`, `string`, `array`, `object`, and `boolean`

### Numbers

Numbers in JavaScript are written as plain numbers.  They include positive and negative integers, as well as decimals (often called _float_)

```js
5 // a number
3.5 //another number
-15 // another number
```

### Strings

JavaScript strings are any values that are surrounded by a pair of quotes.  Either double or single quotes can be used.

```js
"this is a string"
'this is another string'
```

### Booleans

A `boolean` is a type of variable that can only contain `true` or `false`.  

```js
let answer = 8 > 9 // sets answer to 'false'
```

### Arrays

An array is a variable that contains zero or more values.  Each value is assigned an _index_ which is a number that represents the slot where the data is.  They ordered sequentially.  The first index is always 0.

Arrays can be resized whereby new items can be added later (using `push()`) or removed (using `pop()`).

In JavaScript, an array can contain data of different types (such as strings or numbers or even other arrays).

```js
arr1 = [ 3, false, "hello", 3.1415, [ 1, 2, 3] ]
[ 3, false, 'hello', 3.1415, [ 1, 2, 3 ] ]
> arr1[0]
3
> arr1[4]
[ 1, 2, 3 ]
> arr1[4][0]
1
> arr1.push(35)
6
> arr1
[ 3, false, 'hello', 3.1415, [ 1, 2, 3 ], 35 ]
> arr1.pop()
35
```

You can determine the size of an array using the `.length` method:

```js
arr1.length
5
```

You can also insert a specific value in a specific slot using the `[]` operator. You just specify the index of the slot and JS will autofill the rest:

```js
> arr1
[ 3, false, 'hello', 3.1415, [ 1, 2, 3 ] ]
> arr1[5]  // ask for a slot that does not contain anything (i.e. 'undefined')
undefined
> arr1[5] = "salam"  // insert a new value in the last slot (number 5)
'salam'
> arr1
[ 3, false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ]
> arr1[0] = 15  // overwrite the contents of slot #0, the old value is gone
15
> arr1
[ 15, false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ]
> arr1[0]=arr1[5]  // clone slot #5 into slot #0 creating a duplicate
'salam'
> arr1
[ 'salam', false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ]
> arr1[10] = 'test'  // create a new item in slot #10
'test'
> arr1
[
  'salam',
  false,
  'hello',
  3.1415,
  [ 1, 2, 3 ],
  'salam',
  <4 empty items>,  // javascript automatically fills the empty slots in between using 'undefined'
  'test'
]
```

You can use `shift()` and `unshift()` to add and remove items from the _front_ of the array:

```js
 arr1
[ 'salam', false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ] // shift() removes the first slot value and shifts all values to the left 
> arr1.shift('new')
'salam'
> arr1
[ false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ] // shift() has removed salam and shifted false to its spot
> arr1.unshift('new') // unshift() adds a new value to the front
6
> arr1
[ 'new', false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ] // unshift() has shifted all the slots once to the right and added the value new to the array. 
```
when using shift() to remove a value you can also save that value into another varaible for example:

```js
> arr1
[ 'new', false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ]
> item = arr1.shift() // this shifts 'new' from 'arr1' and saves it to the var item
'new'
> arr1
[ false, 'hello', 3.1415, [ 1, 2, 3 ], 'salam' ]
> item // saved in this var
'new' 



```
### Objects

An `object` is a variable with many values inside and these values are ordered how you want it to be.  The values are represented by your own custom "keys".  Unlike arrays, objects do not require the _index_ to be a numerical incrementing value (such as 0,1,2,3)
It doesn't have to start from 0,1,2,3.

```js
const details = {  firstname: "Mussa", lastname: "Saeed", age: 99, hobbies: [], canDrive: true }
{
  firstname: 'Mussa',
  lastname: 'Saeed',
  age: 99,
  hobbies: [],
  canDrive: true
}
> details.firstname
'Mussa'
details.canDrive
true
details.phone = "04"
details
{
  firstname: 'Mussa',
  lastname: 'Saeed',
  age: 99,
  hobbies: [],
  canDrive: true,
  phone: '04'
}
delete(details.phone)
delete(details.phone)
true
> details
{
  firstname: 'Mussa',
  lastname: 'Saeed',
  age: 99,
  hobbies: [],
  canDrive: true
}
```
Below is an example explaining why it is OK to declare an object with the `const` keyword:

```js
 const fixedObject = { }  // start with empty object
undefined
> fixedObject.name = "Mourad" // add a key/value
'Mourad'
> fixedObject // print the contents
{ name: 'Mourad' }
> fixedObject = 3  // change the variable type from object to number
Uncaught TypeError: Assignment to constant variable.
```
a function is when a block of codes that you give it a name becomes easier to use and you dont have to rewrite those blocke of code. 