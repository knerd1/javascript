// var c = 567  
let a = 223
if (true) {                     // This is block scope value will not come outside this block but because
    let a = 10                    // of var it will come outside means 23 will print thats why dont use var...
    const b = 34
    var c = 23
    console.log(a);
}

// console.log(a);    a will not print because let value will not come outside from this block
console.log(b);    like a, 
 console.log(c);   

console.log(a);