///////////////////////////////
// nodeList - my divs
///////////////////////////////
// get by id to easily append children
const divList = document.getElementById("divList");
// using document.querySelectorAll() returns a static NodeList, not live
var divs = document.querySelectorAll("div");
// console.log(divs);

// convert nodeList into an Array using Array.from().
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList
const divsArray = Array.from(divs);
console.log("divs array");
// we have an array now
console.log(divsArray);
// but we keep the original nodeList
console.log(divs);

// looping
console.log("====== for loop divs: ");
for (let i = 0; i < divs.length; i++) {
	let elem = divs[i];
	console.log(elem);
}

// Although NodeList is not an Array, it is possible to iterate on it using forEach().
console.log("====== forEach divs:");
divs.forEach(function(item) {
	let elem = item;
	console.log(elem);
});

// append a new live div with text
var newDiv = document.createElement("div");
var textDiv = document.createTextNode("Test 4");
newDiv.appendChild(textDiv);

// append to list
divList.appendChild(newDiv);
// querySelectorAll generates a static nodeList, so it doesn't update
console.log(divs);
