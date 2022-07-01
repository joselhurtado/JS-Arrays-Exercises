// My Way to Solve the Exercise

let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    hello = myArray.slice(-1)
    // MAGIC HAPPENS HERE
}

console.log(hello)