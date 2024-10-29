let name ="Rahul"
let num=12;

// console.log(name +"with "+ num + " is the number" ); // outdated method, not recommended.

console.log(`Name is ${name} and the number is ${num}`);
// recommended, also known as String interpolation


// another way to create a string
let newStr=new String("Ram")
console.log(newStr[0]);
console.log(newStr.__proto__);
console.log(newStr.length);
console.log(newStr.toUpperCase());


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

