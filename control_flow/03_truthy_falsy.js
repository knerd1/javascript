const userMail = ""
if (userMail) {
     console.log('Got the mail');
} else {
     console.log('dont have user mail');
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){},

if (userMail.length === 0) {           //How to detect empty array
     console.log("Array is empty");
}

const myObj = {}                      //How to detect empty object
if (Object.keys(myObj).length===0) {
     console.log("obj is empty");
}