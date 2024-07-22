const player = {
     username: "Gon",
     rank: 4,
     welcomeText: function () {
          //console.log(`${this.username},Welcome in Hunters Club`);
         // console.log(this);
     }                           //This keyword refers current context
}
player.welcomeText()
//player.username = "killua"
//player.welcomeText()

//console.log(this);     // for node environment this will refers an empty object
//________________________________________________________________________________________

// function Fruits() {
//      let name = "pika-pika"
//      console.log(this.name);
// }
// Fruits()                 here this keyword context will not work in function

// const code = function () {
//      let name = "pika-pika"
//      console.log(this.name);
// }
// code()

const fruits =  ()=> {
     let name = "pika-pika"
     console.log(this.name);
}
//fruits()
//__________________________________________________________

// let number = (num1,num2)=>{    //basic Arrow function
//      return num1+num2
// }
// console.log(number(223,32));

//let number = (num1,num2) => num1+num2   //as a implicit return
//let number = (num1,num2) => (num1+num2)  //in {} we have to write return keyword but in () return keyword dont need
let test = () => ({Value:"pass"})   //returning object
console.log(test(644,75));      