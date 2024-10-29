//Example of stack memory allocation
// Stack memory -> for primitive datatype

let firstVar="Ram"
let secondVar=firstVar

console.log("Before:");
console.log(firstVar)
console.log(secondVar)

console.log("After:");
secondVar="Hanuman"
console.log(firstVar);
console.log(secondVar);



//For Non primitive -> heap memory allocation 
let firstOne = {
    name:"Krishna"
}
let secondOne = firstOne

console.log("\nBefore: ")
console.log(firstOne.name);
console.log(secondOne.name);

console.log("\nAfter: ")    
secondOne.name="Arjun"
console.log(firstOne.name);
console.log(secondOne.name);
