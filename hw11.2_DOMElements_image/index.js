function getRandomInt(){
    return Math.ceil(Math.random()*10);
}

let img = document.getElementById('image');
let randomNumber = 1;

img.style.height = '200px';

const button = document.querySelector('button');
button.onclick = () => {
    randomNumber = getRandomInt();
    img.src = `image/img${randomNumber}.jpeg`;
}




