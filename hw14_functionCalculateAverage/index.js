const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];
function calculateAverage(array) {
    let sumElements = 0;
    let count =0;
    array.forEach(element => {
            if (typeof element === 'number' && !isNaN(element)){
                sumElements += element;
                count++;
            }
    })
    return count>0 ? sumElements/count : 0;
};

const result = calculateAverage(array);
console.log(result);







