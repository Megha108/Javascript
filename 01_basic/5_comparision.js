//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);


console.log("2" > 1);   // compare number which has same datatype
console.log("02" > 1);   

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is equality check == and comparision <>>=<= work differently.
Comparision convert null to a number, treating it as 0.
Thats why (3) null >= is true and (1) is false.
*/

// === (strict check) checks number and datatype also

console.log("2" === 2);
