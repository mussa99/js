console.log('hello world')

'let cant delete but can replace and add/ pop remove and push is add'

let details= {'firstname': 'mussa', 'lastname': 'saeed'}
let list= [1,2,3,4,5,6]
details.age=16
console.log(details)


function convert(fahrenheit)  {
    return (fahrenheit - 32) * 5/9
}
function description(fruits)  {
    for(let fruit of fruits){console.log (fruit + ' is a fruit')  }
}
let degrees = 95;
console.log(convert(degrees)+  ' celcius is ' + degrees + ' fahrenight')
