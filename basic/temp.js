// // functions and if, else 
// // const readline = require("readline");
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });


// // function convert(fahrenheit) {
// //     return (fahrenheit - 32) * 5 / 9
// // }
// // rl.question('enter fahrenight degrees ', function (degrees) {
// //     console.log(convert(degrees) + ' celcius is ' + degrees + ' fahrenight')
// //     process.exit(0);
// // })

// //if and else

// function greater(a, b) {
//     if (a > b) {
//         console.log(a + ' is greater than ' + b)
//     }
//     else if (b > a) {
//         console.log(b + ' is greater than ' + a)
//     }
//     else {
//        console.log ('there both equal ')
//     }
// }


// console.log(greater(8, 10))
// console.log(greater(3, 5))

// console.log(greater(-1, -10))

// console.log(greater(8.5, 100))

// console.log(greater(-1, -1))
// // done else and if 
function applefinder(fruits) {
    for (let f of fruits) {

        console.log("checking " + f)
        if (f == 'apple') {
            console.log('found apple')
            return
        }
    }

    console.log('apple not found ')
}

function fruitfinder(fruits, name) {
    for (let f of fruits) {

        console.log("checking " + f)
        if (f == name) {
            console.log('found ' + name)
            return
        }
    }

    console.log(name + ' not found ')
}

// applefinder(['bananna', 'berries'])
fruitfinder(['banana', 'berries', 'apple'], "mango")
console.log()
fruitfinder(['banana', 'berries', 'apple'], "apple")
console.log()
fruitfinder(['banana', 'mango', 'apple'], "berries")