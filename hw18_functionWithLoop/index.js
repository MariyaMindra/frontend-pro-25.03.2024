function askForNumber(cb){
    let userNumber;
    for (let i = 0; i < 10; i++)
    {
        userNumber = prompt ('Enter a number greater than 100: ');
        if (userNumber !== null && +userNumber > 100)
        {
            return cb(userNumber);
        }
    }
    return cb(null);
}
askForNumber(function(number) {
    if (number !== null)
    {
        console.log('You enter a number: ', number);
    } else
    {
        console.log('Not valid number.');
    }
});











