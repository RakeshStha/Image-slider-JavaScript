
// Setting an interval for slide show
let index = 0;

function makeSlideShow(slidesId){
    const slides = document.getElementById(slidesId);
    const slider = slides.querySelector('.slider');
    const images = slider.querySelectorAll('img');

    let index = 0;

    setInterval(function() {
        index += 1;
        if (index === images.length){
            index = 0;   
        }
        sliderImage.style.transform = `translateX(${index * -650}px)`;
    }, 3500)
}

makeSlideShow('slides')


//making button to change the picture of slider

const buttons = document.querySelectorAll('.button');
const sliderImage = document.querySelector('.slider');
const numberofImage = document. querySelectorAll('.slider img').length;   

let imageIndex = 1;
let translateX = 0;


buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
            if (e.target.id === 'previous'){
                if(imageIndex !==1){
                    imageIndex--;
                    translateX += 650;
                }   
            }
            else{
                if(imageIndex !==numberofImage){
                    imageIndex ++;
                    translateX -= 650;
                }   
            }
            sliderImage.style.transform = `translateX(${translateX}px)`;
    });
});
