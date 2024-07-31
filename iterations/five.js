let coding = ["js","java","rb","py","cpp"]
coding.forEach(function (val) {
     console.log(val);
})
coding.forEach((item)=>{
     console.log(item);
}  )
function printme(vals,) {
     console.log(vals);
}
// coding.forEach(printme)

coding.forEach((items,index,array)=>{
    // console.log(index,items,array);
})

let myCoding =[
     {
          language:"javascript",
          extention:"js"
     },
     {
          language:"java",
          extention:"java"
     },
     {
          language:"python",
          extention:"py"
     }
]
myCoding.forEach( (key)=>{
     console.log(key.language);
})
