const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    
    var str = userInput[0];
    
    console.log(str.split('').join(','));   

});
console.log("hello world")