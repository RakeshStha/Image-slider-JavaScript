const sliderImage = document.querySelector('.slider');
const buttons = document.querySelectorAll('.button');
const numberofImage = document. querySelectorAll('.slider img').length;

let imageIndex = 1;
let translateX = 0;

// var i = 0;
// var images = [];
var time = 2000;

//Image lists
// images[0] = 'image1.jpg';
// images[1] = 'image2.jpg';
// images[2] = 'image3.jpg';
// images[3] = 'image4.jpg';
// images[4] = 'image5.jpg';

function changeImg(){
  
    if(imageIndex !==1){
        imageIndex--;
        translateX += 650;
    } else{
        if(imageIndex !==numberofImage){
            imageIndex ++;
            translateX -= 650;
        }
    }
    sliderImage.style.transform = `translateX(${translateX}px)`;
    setTimeout("changeImg()", time);
}

window.onload = changeImg;


buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        setInterval(() => {

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
        }, 2000);
       
        

    });
});