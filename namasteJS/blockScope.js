{
	//Compound Statement
	var a = 10;
	console.log(a);
}

//shadowing

var a = 100;
{
	var a = 10;
	let b = 20;
	const c = 30;
	console.log(a);
	console.log(b);
	console.log(c);
}
console.log(a);

let b = 100;
{
	var a = 10;
	let b = 20;
	const c = 30;
	console.log(a);
	console.log(b);
	console.log(c);
}
console.log(a);

//illegal shadowing
// let a = 20;
// {
// 	var a = 20;
// }
console.log(a); //we cant do this illegal shadowing

var a = 21;
{
	let a = 21;
}

console.log(a)
