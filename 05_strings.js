// let name = "anderson"
// let record = 33-0

// console.log(`Hello my name is ${name} and my one on on record is ${record}`);

let anime = new String("onePiece, monster")
console.log(anime[4]); //--we can acces key value from this
console.log(anime.length); /// we can know length of string
console.log(anime.charAt()); //we can know which character at which index
console.log(anime.charCodeAt(5)); //we can know code(utf-16)of character
console.log(anime.at(-7)); //at()Method returns character at specific index//allow to use negatuve index'es
let cartoon = anime[5]
console.log(cartoon);  // property access
console.log(anime.slice(3));
console.log(anime.slice(-13,-7)); //we can extract a part of string using this
console.log(anime.substring(8)); //same as .slice() method
console.log(anime.substr(0,5));  //same as .slice() method
console.log(anime.toUpperCase());  //converted to uppercase
console.log(anime.toLowerCase());   //converted to lowercase

