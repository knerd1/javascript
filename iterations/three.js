let arr = [2,44,4,6,5,1]
for (const val of arr) {
     // console.log(val);
}

let hunters = "welcome in hxh world"
for (const players of hunters) {
     
    // console.log(players);
     if (players==" ") {
         // console.log('stop');
          break
     }
}

//maps
const map = new Map()   
map.set('in','India')
map.set('fr','france')
map.set('br','brazil')
map.set('in','India')         //Maps alwways contain unique values

// console.log(map);
// for (const key of map) {
//      console.log(key);      //It will print in array, we can destructure Array below
// }
for (const [key , values] of map) {           //using [ ] in loop we can destructure the array
     console.log(key,":-", values);
}

// const myObj = {
//      "game1": "Nfs",
//      "game2": "Fifa",
//      "game3": "Pubg"
// }
// for (const games of myObj) {  //objects Are not iterable in forof loop
//     // console.log(games);
// }