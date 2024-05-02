function changeColor(button, text, colorSet) {
    if (colorSet) {
        text.style.color = '#DC143CFF';
        button.style.color = '#DC143CFF'
        return colorSet = false;
    } else {
        text.style.color = '#00008BFF';
        button.style.color = '#00008BFF'
        return colorSet = true;
    }
}

let text = document.getElementById('textBlock');
text.style.color = '#00008BFF';
let colorSet = true;
const button = document.querySelector('button');
button.onclick = () => {
    colorSet = changeColor(button, text, colorSet);
}




