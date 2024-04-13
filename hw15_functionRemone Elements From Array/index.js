const array = [1, 3, 4, 6, 4, 2, 5, 7, 4];
function removeElement(array, item) {
    let findIndexOfItem = array.indexOf(item);
    while (findIndexOfItem !== -1){
        array.splice(findIndexOfItem, 1);
        findIndexOfItem = array.indexOf(item);
    }
    return array;
}
removeElement(array,4);
console.log(array);







