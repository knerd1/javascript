// function Aura(){
//     console.log("R");
//     console.log("E");
//     console.log("N");
// }
// Aura()

// function add(num1,num2) {
//     console.log(num1+num2);
// }
// let test = add(343,32)
// console.log("test:", test);


function addnum(num1,num2) {
    // let result = num1 + num2
    // return result
    // console.log("nen");                   after return anything will not print
    return num1 + num2
}
// console.log(addnum(232,323))
// console.log("result: ", result);


function userlogIN(username) {
    return `${username} is logged in`
}
userlogIN("Gon");               // It will not print      
// console.log(userlogIN("Gon"));
//----------------------------------------------------------

function peps(userid) {
    if (userid === undefined) {               // It will Run when Situation will true in this we are not passing anything so its true its undefined 
        console.log("enter a userid");
        return
    }
    return`${userid} is login`
}
//console.log(peps(""));
// console.log(peps());
//----------------------------------------------------

function hunter(player) {
      if (!player) {                      // "!"  it will convert true = false or false = true ,player is undefined then it will reverse 
          console.log(("enter player"));
          return
  }
}
//console.log(hunter());
//--------------------------------------------------------

function hunter(player="Leorio") {       //now it will never be a undefined 
    if (!player) {                
        console.log(("enter player"));
        return
}
      return`${player} is playing`
}
//console.log(hunter());
//------------------------------------------

function allPlayer(...players) {                   /// ... rest operators also spread operator
//function allPlayer(val1,val2,...players) {       /// val1=gon val2=leorio left will go into players
    return players
}
// console.log(allPlayer("Gon","leorio","killua", 212));

//--------------------------------------------------

const hxh = {                                 //pass Object into function
          name :"gon",
          rank :21
}
function handleObject(AnyObject) {
    console.log(`username is ${AnyObject.name} and rank is ${AnyObject.rank}`);
}
 handleObject(hxh)
handleObject({
    name:"leorio",
    rank: 32
})
//-------------------------------------------

const NewArry = [21,23,435,54,565]            //pass Aarry into function
function returnn(getarry) {
    return getarry[0]
}
console.log(returnn(NewArry));
console.log(returnn([12,232,434,42,233]));