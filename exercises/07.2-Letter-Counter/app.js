let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

let parCounts = par.split(""); // Split String by Characters

function CharCounts();{
for(let i = 0; i < parCounts.length; i++){
    if(counts[parCounts[i]] == undefined)
    counts[parCounts[i]] = 0;
    counts[parCounts[i]]++;}
}
console.log(CharCounts());



/* Another way to do this

function count(par) {
    var count = {};
    par.split('').forEach(function (s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

console.log(count(par)); */