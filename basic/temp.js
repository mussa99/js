// functions and if, else 
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convert(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
rl.question('enter fahrenight degrees ', function (degrees) {
    console.log(convert(degrees) + ' celcius is ' + degrees + ' fahrenight')
    process.exit(0);
})

//if and else
f = 10
if (f > 10) {
    console.log(f + ' is greater than 10')
}
else if (7 < 10) {
    console.log('10 is greater or equal to ')
}
