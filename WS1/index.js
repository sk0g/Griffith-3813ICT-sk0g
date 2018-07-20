console.log("Hello World, Node.js!");

var myString = "Hello@World, Node.js Stringsss";
var badWord  = "bad word";
var mistype  = "Spwlling";

myString = myString.replace("@", " ")
myString = myString.substring(0, myString.lastIndexOf("ss"));
console.log(myString);

if (badWord === "bad word") {
    badWord = "****";
}

console.log(badWord);
console.log("I fixed a merge conflict");

console.log(add_function());

function add_function() {
    return(10+5);
}
