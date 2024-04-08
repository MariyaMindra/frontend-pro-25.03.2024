let numOrStr = prompt('input number or string');
console.log(numOrStr);
let typeOfInput;
if(numOrStr === null) {
    typeOfInput='cancel';
} else if( numOrStr.trim() === '' ) {
    typeOfInput='empty';
} else if (isNaN(+numOrStr)) {
    typeOfInput='notANumber'
} else {
    typeOfInput='ok'
}

switch (typeOfInput){
    case 'cancel':{
        console.log('ви скасували');
        break;
    }
    case 'empty':{
        console.log('Empty String');
        break;
    }
    case 'notANumber': {
        console.log(' number is Ba_NaN');
        break;
    }
    case 'ok':{
        console.log('OK!');
        break;
    }
}

