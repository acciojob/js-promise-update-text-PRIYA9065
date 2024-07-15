//your JS code here. If required.
let output = document.getElementById("output");

let promise = new Promise(function(resolve, reject) {

	setTimeout(() => resolve(output.innerHTML = "Hello, world!"), 1000)
});
