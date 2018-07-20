console.log("Hello World, Node.js!");

var myString = "Hello@World, Node.js Stringsss";
var badWord  = "bad word";
var mistype  = "Spwlling";

myString = myString.replace("@", " ")
myString = myString.substring(0, myString.lastIndexOf("ss"));
console.log(myString);
console.log("I caused a merge conflict");

if (badWord === "bad word") {
    badWord = "****";
}

console.log(badWord);
