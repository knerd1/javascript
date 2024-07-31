const nums = [1,2,3,4,5,6,7,8,9,10]
// let numSum =  nums.map((nums)=>nums + 10)

const newno = nums
        .map((nums)=>nums*10)
        .map((nums)=>nums+1)             
        .filter((nums)=> nums>=50)              //Called Chaining
console.log(newno); 