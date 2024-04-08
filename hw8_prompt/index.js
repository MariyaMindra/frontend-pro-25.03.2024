let userName = prompt('Input your name: ');
if (userName === null || userName.length ==0)
{
    alert('Hello! Sorry, but you did not enter your name! Reload page and try again.')
} else alert('Hello, ' + userName + '! How are you?');

