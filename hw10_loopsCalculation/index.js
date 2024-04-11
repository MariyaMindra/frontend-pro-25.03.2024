let userCurrency = prompt('Enter which currency to calculate: 1 - USD, 2 - EUR, 3 - PLN: ');
let currencyType = Number(userCurrency);
if (currencyType === 1 ||
    currencyType === 2 ||
    currencyType === 3)
{
    let exchangeType ='';

    switch (currencyType) {
        case 1: {
            exchangeRate = 39;
            exchangeType = 'USD';
            break;
        }
        case 2: {
            exchangeRate = 42;
            exchangeType = 'EUR';
            break;
        }
        case 3: {
            exchangeRate = 9.5;
            exchangeType = 'PLN';
            break;
        }
    }
    let messageCurrency = `1${exchangeType} = ${exchangeRate}UAH.\n`;
    for (let currency = 10; currency<=100; currency+=10)
    {
        let costUAH = currency * exchangeRate;
        messageCurrency += `${currency}${exchangeType} = ${costUAH} грн\n`
        console.log(`${currency}${exchangeType} = ${costUAH} грн`);
    }
    alert(messageCurrency);
} else {
    alert(`Something wrong. Restart the pages, if you want to calculate currency`);
}


