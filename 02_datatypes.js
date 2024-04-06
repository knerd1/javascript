 console.log(typeof(null));
 console.log(typeof(undefined));

 const score = 433
 const scoreS = 654.7
 const isLogged = true

 const outTemp = null
 let userEmail;
 let Id = Symbol("211")
 let secondId = Symbol("211")
 console.log(Id===secondId);

 const BigNumber = 2323299n
 console.log(typeof(BigNumber));

 let Animes = ["Solo", "AOT", "Tokyo"]
 console.log(typeof Animes);
let MyObj = {
    Name:"Soan",
    age: 23,
} 
console.log(typeof MyObj);

const myFunction = function(){
console.log("hello ji");}
console.log(typeof secondId);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myUsername = "ronoroa"
let NewUsername = myUsername
 NewUsername = "Zoro"

console.log(myUsername);
console.log(NewUsername);

let userOne = {
    mail: "hello@gmail.com",
    id: 828
}
let userTwo = userOne
userTwo.mail = "help@gmail.com"
console.log(userOne);
console.log(userTwo);