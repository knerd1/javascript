let name = "anderson"
let record = 33-0

console.log(`Hello my name is ${name} and my one on on record is ${record}`);

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
let anime2 = "tokyo and tokyo hinata belongs to that city"
let All = anime.concat(', ' + anime2) //we can use this as "+"
console.log(All);
let anime4 = "    kyoto          "
console.log(anime4.trim()); //removes whitespace from string from both side
console.log(anime4.trimStart()); //removes from strat
console.log(anime4.trimEnd()); //remove from end
console.log(anime2.padStart(10,"*"));   
console.log(anime2.padEnd(10,"8"));   //for padding
console.log(anime.repeat(5)); // We can repeat strings many times
console.log(anime2.replace("tokyo","shibuya")); //for replacing strings
console.log(anime2.replace(/TOKYO/i, 'shibuya')); //for case insensitive 
console.log(anime2.replace(/tokyo/g, 'green land')); // for replacing all same stings
console.log(anime2.replaceAll('tokyo', 'kyoto')); //also for all strings
console.log(anime2.split(""));
console.log(anime2.split(" "));
console.log(anime2.split(""));
console.log(anime2.split("|")); // we can convert string into array
console.log(anime.includes('monster')); //can know if value exits in variable or not