const calculator = require('./calculator');

var addResult = calculator.add(1, 3, 5, 7);
console.log("add result : ", addResult);

var subResult = calculator.substract(7, 5, 3, 1);
console.log("substract result : ", subResult);

var divResult = calculator.divide(6, 2);
console.log("divide result : ", divResult);

var mulResult = calculator.multiply(6, 2);
console.log("multiply result : ", mulResult);

const crypto = require('crypto');

const secret = 'abcdfe';
const hash = crypto.createHash('sha256', secret)
    .update("I love cupcake")
    .digest("hex");
console.log(hash);