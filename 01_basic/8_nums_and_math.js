const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 23.8903

//console.log(otherNumber.toPrecision(2));

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

//************************* Maths ********************

console.log(Math);
console.log(Math.abs(-4));    // convert -ve number to +ve
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));  // take top value
console.log(Math.floor(4.2));  // take down value
console.log(Math.min(4,3,8,5));
console.log(Math.max(4,3,8,5));

console.log(Math.random());   // always take value in between 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) +min)


