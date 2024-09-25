const userID=100019465
let name="raju"
var course="BTECH" // prefer not to use var because of issue in block and functional scope.
location ="delhi" //it is possible but does not considered as good practice.

// userID=1000020428  //cannot assign values to constant
console.log(userID);

name="farhan"
course="BARCH"
let state; // js took default value as undefined.

//console table can used to print multiple variales value using one console statement.
console.table([name,course,state])
