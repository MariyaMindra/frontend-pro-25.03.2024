const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 124, 12];

function getEvenNumbers(array) {
    return arr.filter(number => number % 2 === 0);
}
function displayArray(array) {
    array.forEach((number) => {
        console.log(number);
    })
}

const evenNumbersArray = getEvenNumbers(arr);
console.log(evenNumbersArray);
displayArray(evenNumbersArray);
















