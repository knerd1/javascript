const myArry = [1,3,5,7,9,11]
// let total = myArry.reduce(function (accumulator,currentValue) {     
//      console.log(`accumulator: ${accumulator},and currentValue: ${currentValue}`);
//      return accumulator+currentValue
// },0)

//With Arrow Function;;;;;

// const total = myArry.reduce((accumulator,currentValue) => accumulator+currentValue,0)
// console.log(total); 

const shoppingCart = [
     {
          CourseName: 'Advance Javascript',
          price: 2999
     },
     {
          CourseName: 'Advance Python',
          price: 999
     },
     {
          CourseName: 'Advance React',
          price: 5999
     },
     {
          CourseName: 'Advance Mobile Dev.',
          price: 12999
     },
]
const totalPrice = shoppingCart.reduce((accumulator,shoppingCart)=>accumulator+shoppingCart.price,0) 
console.log(totalPrice);