setTimeout(function () {
	console.log("Tier");
}, 5000);
function x(y) {
	console.log("x");
	y();
}

x(function y() {
	console.log("y");
});

function eventListners() {
	let count = 0;
	document.getElementById("clickMe").addEventListener("click", function () {
		console.log("hello ji Button clicked", ++count);
	});
}

eventListners();
