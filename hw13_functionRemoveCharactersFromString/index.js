const userMessage = prompt('Enter your string', 'Hello world!');
const userChars = prompt('Enter some chars for removing', 'l, d');
function removeCharacters (string, arrChars) {
    let arrayString = string.split('');
    let modifyArray = arrayString.filter(char => !arrChars.includes(char));
    return modifyArray.join('');
}

if ( userMessage === null || userMessage.trim() === ''){
    alert('Sorry, but you did not provide any string. Reload the page.');
} else {
    if (userChars === null || userChars.trim() === '') {
        console.log (`You didn't provide any chars to delete. Your string is : ${userMessage}`);
    } else {
        let arrayChars = userChars.split(', ');
        const result = removeCharacters(userMessage, arrayChars);
        console.log ('Resulting string: ' + result);
    }
}







