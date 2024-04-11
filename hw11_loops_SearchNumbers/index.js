let inputStr = prompt('Enter a integer number:');
let userNumber = Number(inputStr);
if (Number.isInteger(userNumber)) {
    let i = 1;
    while (userNumber >= Math.pow(i, 2) && i <= 100)
    {
        console.log(i);
        i++;
    }
}
else
{
    alert('Restart the page! Try again');
}

