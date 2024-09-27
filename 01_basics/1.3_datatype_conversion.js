let num="12"

console.log(num);
console.log(typeof num);

let conversion=Number(num)
console.log(conversion);
console.log(typeof conversion);


let  num1="123A"
console.log( num1);
console.log( typeof num1);
console.log( typeof(num1));

let  conversion2=Number(num1)
console.log(conversion2); // returns NaN (i.e Not a Number) and NaN is having number datatype.
console.log(typeof conversion2);

let a=1,b=0
console.table([Boolean(a),Boolean(b)]);
/*
    1 -> true
    0 -> false
    "" -> false
    "xyz" ->true
*/

let x=undefined,y=null
console.table([typeof x,typeof y])
console.table([Number(x),Number(y)])

