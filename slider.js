//slider

const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+width*count+'px)';
}

document.querySelector('.sliderNext').addEventListener('click', () => {
    count++;
    if(count >= images.length){
        count = 0
    }
    rollSlider();
});

document.querySelector('.sliderPrev').addEventListener('click', () => {
    count--;
    if(count < 0){
        count = images.length - 1;
    }
    rollSlider();
})

