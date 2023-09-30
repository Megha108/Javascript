const name = "megha"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('megha-patel-com')

 console.log(gameName[0]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase);
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
console.log(newString);


const anotherstring = gameName.slice(-9, 4)
console.log(anotherstring);

const newStringOne = "  Megha  "
console.log(newStringOne);
console.log(newStringOne.trim());   //trim remove extra space from string

const url = "hhtps://megha.com/megha%20patel"

console.log(url.replace('%20', '-'));

console.log(url.includes('megha'))

console.log(gameName.split('-'));

//above all are the medthod of the string
