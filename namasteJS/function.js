// a();
// b(); //This will give error because Hoisting
//
// //Function statement aka Function Declaration
// function a() {
// 	console.log("a called");
// }
// a();
//
// //Function expresion
// var b = function () {
// 	console.log("b called");
// };
// b();
//
// //Difference b/w these "Hoisting"
//
// //Anonymous Functi function withiout A Name
// //They are used when the function are used as a value
// // function() {
// // }
// let abc = function () {};
//
// //Named Function Expression == Function Expression using with name
//
// let abcd = function axyz() {};
//
// //Diff b/w parameters and argument
// function xyz(param1, param2) {
// 	//This is called as parameters
// 	console.log("hello");
// }
// xyz(1, 2); //--This is called argument
//
//First Class function -- Passing another function inside Function
var G = function (params) {
	console.log(params);
};
function xyzab() {}

G(xyzab());
//-------------------

var a = function (param1) {
	return function xyz() {};
};

console.log(a());
