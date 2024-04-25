// // Object Constructor method

// //object litreals 

//  const mysym = Symbol()    //symbol datatype
// const objUser = {
//     name:"John-Jones",               //Objects Have Keys And its Values
//     age:25,
//     title:"heavyweight",
//     "record":"27-1",
//     lastFight:[2023,2021,2018,2016],
//     [mysym]:12
//  }
//                                     // object keys is also strings
// // console.log(objUser.name);          // we can access object through (.key) method
// // console.log(objUser['name']);       // we can access object through  [".key"] method
// // console.log(objUser.record);
// // console.log(objUser['record']);
// // console.log(objUser[mysym]);

// // objUser.age = 34             //update the value in object
// // console.log(objUser.age);

// // Object.freeze(objUser)   // now we cant change the value of object because we have locked the object using object.freeze method
// // console.log(objUser);

// objUser.greetings = function() {
//     console.log("hello node js user");
// }

// objUser.greetingsTwo = function (){
//     console.log(`Hello UFC Champion from ${this.lastFight}`);
// }
// console.log(objUser.greetings());
// console.log(objUser.greetingsTwo());
//-===-=-=-=-=-==============================================================================-----------------------===========-
// // const socialApp = new Object()
// const socialApp = {}
// socialApp.id = 23212
// socialApp.name = "meta"
// socialApp.isLoggedIn = false

// // console.log(socialApp);
// let normalUser = {                      // Object Nesting
//     fullname:{
//         username:{
//             firstname: "Maria",
//             lastname: "Jones"
//         }
//     }
// }
// console.log(normalUser.fullname.username);

const Movies ={1:"A",2:"B"}
const Series = {3:"C",4:"D"}
//const Combine= Object.assign({},Movies,Series)
let combineObj = {...Movies,...Series}
console.log(combineObj);

