// Primitive 

// 7 type : String(dt: string), number(dt: number), boolean(dt: boolean),
// null(dt: object), undefined(dt : undefined), symobl, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')         //dt of symbol : symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12032121091008n



// Reference (Non Primitive )

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myobj = {
    name: "hitesh",        // dt : function
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);   

//*************************************************************

//Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename = "meghapateldotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername); 

let userOne = {
    email :"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email= "megha@google.com"

console.log(userOne.email);
console.log(userTwo.email);
