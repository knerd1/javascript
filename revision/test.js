//
// {
//   var a = 4;
// }
// console.log(a)

// //Variable shadowing
// function test() {
//   let a = "hello"
//
//   if (true) {
//     let a = "hi"
//     console.log(a)
//   }
//
//   console.log(a)
// }
// test()

//This is called illegal shadowing 
// function test() {
//   var a = "hello"
//   let b = "bye"
//
//   if (true) {
//     let a = "hi"
//     var b = "goodbye"
//     console.log(a)
//     console.log(b)
//   }
// }
// test()

// Map() method
// const nums = [1, 2, 3, 4, 5]
// const multiplyThree = nums.map((num, i) => {
//   return num * 3 + i;
// })
// console.log(multiplyThree)

//Filter() Method
// const nums = [1, 2, 3, 4, 5]
//
// const moreThanTwo = nums.filter((i) => {
//   return i > 2;
// })
// console.log(moreThanTwo)

//reduce()

// const nums = [1, 2, 3, 4, 5]
//
// const multiplyOfAll = nums.reduce((acc, curr) => {
//   return acc * curr;
// }, 5)
// console.log(multiplyOfAll)

//function curry
// function curry(a) {
//   return function(b) {
//     return function(c) {
//       console.log(a + b + c)
//     }
//   }
// }
//
// curry(1)(2)(3)

const obj = {
  name: "elone",
  greet: () => {
    console.log("Hello " + this.name)
  }
}
obj.greet()
