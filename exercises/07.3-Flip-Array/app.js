// Code Already Compiled
let arr = [45, 67, 87, 23, 5, 32, 60];

//Your code here.
function reverse(b) {
    let finalArray = [];
    for (let i = b.length-1; i >= 0; i--) {
        finalArray.push(b[i]);
    }
    return finalArray;
}
console.log(reverse(arr));
