// const score = 100.3335
// const Score = new Number(500)
// console.log(score);
// console.log(Score);
// console.log(Score.toString());
// console.log(typeof(Score));
// console.log(score.toFixed(5));

// const amount = 1152.329228
// console.log(amount.toPrecision(6));
// console.log(amount.toPrecision(2));
// console.log(amount.toPrecision(5));
// const no = 1000000
// console.log(no.toLocaleString('en-in'));

// ===========================================================================
console.log(Math.abs(-55667));  //gives absolute value and convert negative value into positive
console.log(Math.round(5.876757)); //makes the value roundoff
console.log(Math.floor(5.9));  //fixed the value with fix upper value
console.log(Math.ceil(5.3));   ///fixed the value with fix lower value
console.log(Math.min(4,6,8,4,8)); 
console.log(Math.max(6,9,13,76));
console.log(Math.random());      //gives random value between 0-1
console.log(Math.random()*10);   // gives that type of value like 2.343232, 3.434434, 5.24242
console.log((Math.random()*10)+1);   //now this will give value between 1-10
console.log(Math.floor((Math.random()*10)+1));   //gives reoundoff small values like 2,4,5,6

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min)); 