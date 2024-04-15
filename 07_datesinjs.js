let myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

 const newDate = new Date(2024,2,21)
 //  const newDate1 = new Date(2024,1,21,5,6,7)    //with single digit,month will start with 0
// const newDate2 = new Date("2021-01-23")     //but with yy-dd-mm format month will start with 1
// console.log(newDate2.toLocaleString());
let myTimestamp = Date.now()
console.log(Math.floor(myTimestamp/1000));
 console.log(newDate.getTime());
 console.log(newDate.getDay());
 console.log(newDate.getMonth()+1);