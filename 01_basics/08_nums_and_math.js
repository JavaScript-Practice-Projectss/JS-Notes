const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//123.9
//but if 11234.89 pr to precision 4 kr dain gy to exponential mn values a jain gi 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//it will show i us standard by default en-IN this is indian standard so it will output 10,00,000
//Number.MAX_SAFE_INTEGER etc
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//neg values positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//zra sa b 4 sy zyda huwa to top value 5
// console.log(Math.floor(4.9)); // lowest so 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//always gives vlue between 0 and 1
console.log((Math.random()*10) + 1);// multiply 10 sy left pr shift kr dia value ko
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)