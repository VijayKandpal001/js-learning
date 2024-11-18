const marvel=["tony", "strange","peter","steve"]
const dc =["superman", "Barry","bruce"]

//push operation directly push to entire array
// marvel.push(dc) 
// console.log(marvel)


//concat push the content only and require a new variable for the output
const new_array=marvel.concat(dc) // it is less prefered in industry
// console.log(new_array)


// this ... is known as spread operator and adv of using it is we can add n number of arrays in the given below example
const naya_array=[...marvel,...dc]
console.log(naya_array)





const another_arr=[12,34,45,[23,67,3,[8,56]],53]
console.log("Before flatting");
console.log(another_arr)

const new_another_arr=another_arr.flat(Infinity)
console.log("After flatting");
console.log(new_another_arr)


console.log(Array.isArray(new_another_arr)) //returns true if new_another_arr is an array
console.log(Array.from("Iyer")) // create an array of content iyer as a seperate character
console.log(Array.from({name: "Vedugopal"})) // interesting for interviews

let s1 = 19
let s2 = 17
let s3 = 17
console.log(Array.of(s1, s2, s3));