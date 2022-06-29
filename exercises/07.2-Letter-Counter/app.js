let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// My Way to Solve the Exercise

let parCounts = par.split(""); // Split String by Characters

function count(par) {
    var count = {};
    par.split('').forEach(function (s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

console.log(count(par.toLowerCase()));