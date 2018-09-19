// function myLab() {
var coffee = "this is global coffee";

// ***************************

(function tea() {
	// var coffee = "sleeping";
})();

function water() {
	coffee = "global inside an IIFE, but it's not declared";
	juice = "wtf";
}
water();

// my array
const myArray = ["One", "Two", "Three", "Four"];
for (let i = 0; i < myArray.length; i++) {
	let elem = myArray[i];
	console.log(elem);
}

myArray.forEach(function(item) {
	let elem = item;
	console.log(elem);
});
