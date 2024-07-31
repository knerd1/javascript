// let coding = ["js","java","rb","py","cpp"]

// let mycodes = coding.forEach((item)=>{
//      console.log(item);
//      return item
// })
// console.log(mycodes);

// //_______________________________________________________________________

// let Nums = [1,2,3,4,5,6,7,8,9,10]
// let newNum = Nums.filter((Nums)=>{Nums>4})
// console.log(newNum);  

// //_______________________________________________________________________

// let number = [1,2,3,4,5,6,7,8,9,10]
//  let newNumber = number.filter((number)=>{
//     return number>4})
// console.log(newNumber);

// //_______________________________________________________________________

// let numbers = [1,2,3,4,43,3,3333,30]
// let newNums = numbers.filter((numbers)=>numbers>4)
// console.log(newNums); 

// //_______________________________________________________________________

// let nm = [1,4,54,6,5,6,7,98,9,89,0,9,87,76,65]
// let eAray = []
// nm.forEach((item)=>{
//      if (item>4) {
//           eAray.push(item)
//      }
// })
// console.log(eAray);  

const books = [
     {title:"book One",
      genre:"Fiction",
      year:1932,
      edition:2004
     },
     {title:"book Two",
     genre:"Non - Fiction",
     year:1943,
     edition:2001
     },
     {title:"book Four",
     genre:"History",
     year:1978,
     edition:2002
     },
     {title:"book Five",
     genre:"Science",
     year:1973,
     edition:2014
     },
     {title:"book Six",
     genre:"Fiction",
     year:1999,
     edition:2015
     },
     {title:"book Seven",
     genre:"History",
     year:2004,
     edition:2023
     },
     {title:"book Eight",
     genre:"Non - Fiction",
     year:2010,
     edition:2013
     },
     {title:"book Ten",
     genre:"Science",
     year:1969,
     edition:2000
     },
]
let userBooks =books.filter((bk)=>bk.genre == 'History')
 userBooks = books.filter((bk)=>bk.year > 1987)
 userBooks = books.filter((bk)=>bk.year > 1987 && bk.genre== 'History')

console.log(userBooks);