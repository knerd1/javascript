let multiply = function (x, y) {
	console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 5);
multiplyByThree(4);

//By using Closers

let mult = function (x) {
	return function (y) {
		console.log(x * y);
	};
};

let multiplybyeight = mult(8);
multiplybyeight(2);

let multiplybyNine = mult(9);
multiplybyNine(2);
