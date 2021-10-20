// functions and if, else 
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function convert(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9
// }
// rl.question('enter fahrenight degrees ', function (degrees) {
//     console.log(convert(degrees) + ' celcius is ' + degrees + ' fahrenight')
//     process.exit(0);
// })

//if and else

function greater(a, b) {
    if (a > b) {
        console.log(a + ' is greater than ' + b)
    }
    else if (b > a) {
        console.log(b + ' is greater than ' + a)
    }
    else {
       console.log ('there both equal ')
    }
}


console.log(greater(8, 10))
console.log(greater(3, 5))

console.log(greater(-1, -10))

console.log(greater(8.5, 100))

console.log(greater(0, 0))

