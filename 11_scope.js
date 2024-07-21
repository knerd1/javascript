// var c = 567  
let a = 223
if (true) {                     // This is block scope value will not come outside this block but because
    let a = 10                    // of var it will come outside means 23 will print thats why dont use var...
    const b = 34
    var c = 23
    // console.log(a);
}

// console.log(a);    //a will not print because let value will not come outside from this block
// console.log(b);   // like a, 
// console.log(c);   
// console.log(a);

// ---------------------------------

function one() {                //parent scope
    const name = "kite-san"
    function two() {             //child scope
        const rank = 3
        //console.log(name);
    }                     
    // console.log(rank);     we cant access value from there,from outside the scope
    two()
}                  //child scope can access values from parent scope but parent scope cant
one()   

///like here we can access name(from parent scope) in child scope but we cant access rank(from child scope) in parent scope

// another example 

if (true) {
    const username = "Gon"
    if (username === "Gon") {
        const ranks = " 21"
        //console.log(username+ranks);
    }
    //console.log(ranks);
}
//console.log(username);

// ---------------------------------------------------------------
// two ways of declaring function
// (i) Simple method
console.log(addOne(32));
function addOne(num) {
    return num +1
}
//----------------------------------------------------------------
// (ii) by expression
console.log(addTwo(23));
const addTwo = function(num) {    
    return num +1
}
