// Array can store any type of values like array, numbers,strings like this

const myArr = [11,13,52,31,24]
const animes = ['one piece','vinland saga','tokyo revengers','promiseland','jjk','Attack Titan','Demon Slayer']
const arr2 = new Array(1,3,4,5,45,56)
console.log(arr2);
 console.log(myArr[2]);
 console.log(animes);

                             // array methods

 arr2.push(345)                                     // it will add elements in the end of the array
 arr2.pop()                                 //removes last element form an array
 console.log(arr2);
myArr.unshift(533)                                   //for adding element in start
myArr.shift()                                           //for removing first element in array
console.log(myArr);                               
console.log(myArr.includes(2-1));                             //it will give answer in true/false if something exist
console.log(myArr.indexOf(3+2));                            // it will tell the index value of that element

const newArry = animes.join()                              //add all elements of array into string
console.log(newArry);
console.log(typeof newArry);
console.log("Orignal Array=", myArr);
console.log("Sliced Array=",myArr.slice(1,4));               //Slice takes value 1,2,3 and will not take 4
console.log("Check Array is Changed or not",myArr);           // Array will not change after slice method
console.log("Spliced Array",myArr.splice(1,3));             //Splice takes all Values 1,2,3
console.log("Check Array is Changed or not",myArr);          // Array will not change after splice method

myArr.push(animes)    // push operation will add one array into another array
console.log(myArr);
console.log(myArr[5][0]);

let A = [33,55,66,22,88]
let B = ['wano',53,67,78,43]
const C = A.concat(B)       //it will also add elements in array  
console.log(C);

const D=[...A,...B];    // spread opreators(...) it will also add elements in Array
console.log(D);

let TheArray = [45,55,94,[123,43,98,[90,76,5],676,88,98,],76,7,76,[54,57,88,90,97]]
console.log(TheArray.flat(Infinity));       // .flat() its will also spred multiple array in one array

console.log(Array.isArray("help"));        // .isArray() will check is value is in Array or not give true and false
console.log(Array.isArray([23,34,54,54]));
console.log(Array.from("help"));    // .from()  will convert any value in array
console.log(Array.from({shows:"Wano"}));  // gives empty array because we have to declare which one will go into array either key or value

let Score1=3232
let Score2="3322"
let Score3= 34232
console.log(Array.of(Score1,Score2,Score3));   // .of() it will also any variable or anything into Arrays