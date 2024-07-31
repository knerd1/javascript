const myObject = {
     js:"javascript",
     cpp:"c++",
     py:"python",
     rb:"ruby"
}
for (const key in myObject) {
   // console.log(`${key} is shortcut of ${myObject[key]}`);
}
let myArray = ['js','cpp','rb','py','java']
for (const key in myArray) {
    // console.log(myArray[key]);
}

const map = new Map
map.set("in","india")
map.set("fr","france")
map.set("br","brazil")
for (const key in map) {
     console.log(key);
} 