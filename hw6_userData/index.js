const userYearOfBirth = prompt('Enter your year of birth:');
const userCity = prompt('Enter your city of residence:');
const userFavoriteSport = prompt('Enter your favorite sport:');

if (
    userYearOfBirth === null &&
    userCity === null &&
    userFavoriteSport === null
){
    alert('Sorry, but you did not provide any information. Reload the page.');
} else {
    let userAgeMessage;
    if (
        userYearOfBirth !== null &&
        userYearOfBirth.length === 4 &&
        !isNaN(parseInt(userYearOfBirth))
    ) {
        const userAge = 2024 - userYearOfBirth;
        userAgeMessage = 'Your age is: ' + userAge;
    } else
        userAgeMessage = 'Sorry, but you did not provide information about year of birth';
    let userCityMessage;
    if (userCity !== null && userCity.trim() !== '')
    {
        userCityMessage ='You live in the city '+userCity;
        if (
            userCity === 'Kyiv' ||
            userCity === 'Washington' ||
            userCity === 'London'
        ){
            userCityMessage = 'You live in the capital ' + userCity;
        }
    } else
        userCityMessage = 'Sorry, but you did not provide information about your city';

    let sportMessage = 'Your favorite sport is ' + userFavoriteSport;
    if (userFavoriteSport === null || userFavoriteSport.trim() === '')
    {
        sportMessage = 'Sorry, but you did not provide information about sport.';
    } else
    {
        switch (userFavoriteSport)
        {
            case 'football': {
                sportMessage += ' Cool! Want to be like Cristiano Ronaldo.';
                break;
            }
            case 'basketball': {
                sportMessage += ' Cool! Want to be like Michael Jordan.';
                break;
            }
            case 'tennis': {
                sportMessage += ' Cool! Want to be like Novak Djokovic.';
                break;
            }
        }
    }
    alert(userAgeMessage + '.\n' + userCityMessage + '.\n' + sportMessage);
}


