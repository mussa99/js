const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convert(fahrenheit)  {
    return (fahrenheit - 32) * 5/9
}
rl.question('enter fahrenight degrees ', function(degrees) {
    console.log(convert(degrees)+  ' celcius is ' + degrees + ' fahrenight')
    process.exit(0);
})
// done
