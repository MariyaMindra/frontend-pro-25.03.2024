let isUserCheck = false;
do {
    let inputStr = prompt('Enter an integer number:');
    if (inputStr === null)
    {
        alert('Sorry, but you did not provide any information. Reload the page.');
        break;
    }
    else
    {
        let userNumber = Number(inputStr);
        if (isNaN(userNumber) || inputStr.trim() === '') {
            alert('You Entered not a number');
        }
        else {
            if (Number.isInteger(userNumber) && userNumber > 0)
            {
                let i = 2;
                let isPrime = true;
                while (i <= userNumber/2 && isPrime)
                {
                    if (userNumber%i === 0)
                    {
                        isPrime = false;
                    }
                    i++;
                }
                if (isPrime)
                {
                    alert(`${userNumber} is prime` );
                } else
                {
                    alert(`${userNumber} is not prime`);
                }
            } else
            {
                alert('Number is not integer or less than zero');
            }
        }
    }
    isUserCheck = confirm('Do you want to check another number?');
} while (isUserCheck)
alert ('Goodbye!');




