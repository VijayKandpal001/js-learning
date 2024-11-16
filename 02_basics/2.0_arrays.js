const newArr = [12,34,56,true,"raju"]

const newArr2 = new Array(1,4,2)

console.log(newArr2[1])
console.log(newArr.length);

newArr2.push("newvalue")
console.log(newArr2)
newArr2.pop()
console.log(newArr2)

console.log(newArr2.includes(12)) //return output is of boolean type.
console.log(newArr2.indexOf(4)) // return the index of the element if present else -1.

const newStr=newArr2.join()
console.log(typeof newStr)
console.log(newStr)


//Slica and splice 

const arr=[10,20,30,40,50]

const arr2=arr.slice(1,4)
console.log("After Slicing: " ,arr2); // the last range does't include 
console.log("Original Array: " ,arr); // slicing does't manipulate the original array means the original array does't affect after the slicing.

const arr3=arr.splice(1,4)
console.log("After Splicing: " ,arr3); // last range also include.
console.log("Original Array: " ,arr); // splicing manipulate the original array means the sliced part removed from the original array.

