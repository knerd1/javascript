//if
let isUserLoggedIn = true
if (isUserLoggedIn<2) {
    // console.log("two = 2");
}
if (3 === '3') {
     //console.log('hunters');
}
//<,>,<=,=>,==,!=(not equal),===(check data type also strict checking)

if (2!=3) {
     //console.log("right");
}
//----------------------------------------------------------------------
const temp = 40
if (temp>50) {
     console.log('temp is normal');
} else {
     console.log("temp is not normal");
}
//_____________________________________________________________

// const score = 500
// if (score>300) {
//      let power = "fly"
//      console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000
// if (balance>60) console.log('text'),console.log('test2');;   // This is implicit scope (not recommend)

if (balance <500) {
     console.log('less than 500');
} else if (balance <789) {
     console.log('less than 789');
}
else if (balance<900) {
     console.log('greater than 900');
} else {
     console.log('less than 1200');
}

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedin && debitCard && 2==4) {
     console.log('You are redirecting');
}
if (loggedInFromGoogle || loggedInFromEmail) {
     console.log("userLoggedIN");
}