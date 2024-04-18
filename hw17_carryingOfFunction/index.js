function product(multiplier) {
    return function (multiplier2) {
        return multiplier * multiplier2;
    }
}

const result = product(6)(2);

console.log(result);











