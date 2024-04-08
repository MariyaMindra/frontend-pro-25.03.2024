let userNumber = prompt('Enter three-digit number:');
if (!isNaN(parseInt(userNumber)) && userNumber.length == 3){
    const digit0 = userNumber[0];
    const digit1 = userNumber[1];
    const digit2 = userNumber[2];
    if (digit0 === digit1 &&  digit1 === digit2) {
        console.log ('All digits in the number are the same. ' + 'Your number is ' + userNumber);
    } else if (digit0 === digit1 ||  digit1 === digit2 || digit0 === digit2) {
        console.log ('There are the same digits in the number. ' + 'Your number is ' + userNumber);
    } else console.log ('All digits in the number are different. ' + 'Your number is ' + userNumber);
} else alert('Not correct input. Reloading page');
