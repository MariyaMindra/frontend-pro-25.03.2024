function getRandomInt(){
    return Math.ceil(Math.random()*10);
}

let img = document.getElementById('image');
img.style.width = '50vw';
img.style.height = 'auto';
let randomNumber = 1;

const button = document.querySelector('button');
button.onclick = () => {
    randomNumber = getRandomInt();
    img.src = `image/img${randomNumber}.jpeg`;
}




