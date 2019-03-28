let name = ("dickens")
console.log("my name is " + name);

//if, to create two separate, alternative execution paths.
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
} else {
console.log("Hey. Why didn't you give me a number?");
}

//If you have more than two paths to choose from, you can “chain” multiple
//if/else pairs together. Here’s an example:
let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}
