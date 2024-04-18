function accumulator(initNumber) {
    let total = initNumber ?? 0;
    return function(addNumber) { return total += addNumber;}
}

const sum = accumulator(0);

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));










