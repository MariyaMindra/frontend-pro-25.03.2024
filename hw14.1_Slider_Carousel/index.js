const imagesArray = [
    'image/img1.jpeg',
    'image/img2.jpeg',
    'image/img3.jpeg',
    'image/img4.jpeg',
    'image/img5.jpeg'
];

const imageContainer = document.getElementById('imageContainer');
const dotsContainer = document.getElementById('dotsContainer');
let currentSlideIndex = 0;

function renderImages() {
    imagesArray.forEach((src, index) =>{
        let img = document.createElement('img');
        img.src = src;

        if (index === currentSlideIndex) {
            img.style.display = 'block';
        }
        imageContainer.appendChild(img);

        let dot = document.createElement('button');
        dot.className = 'dotBtn';

        dot.addEventListener('click', () => setSlide(index));
        dotsContainer.appendChild(dot);
        })
    updateButtons();
}

function setSlide(index) {
    currentSlideIndex = index;
    [...imageContainer.children].forEach((img, i) => {
        img.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
    //console.log([...imageContainer.children]);
    updateButtons();
}

function updateButtons(){
    document.getElementById('prevBtn').style.visibility = currentSlideIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').style.visibility = currentSlideIndex === imagesArray.length - 1 ? 'hidden' : 'visible';
    [...dotsContainer.children].forEach((dot, index) => {
        dot.className = index === currentSlideIndex ? 'dotBtn active' : 'dotBtn';
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        setSlide(currentSlideIndex - 1);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlideIndex < imagesArray.length - 1) {
        setSlide(currentSlideIndex + 1);
    }
});

renderImages();



