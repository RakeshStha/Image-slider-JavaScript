const sliderImage = document.querySelector('.slider');
const buttons = document.querySelectorAll('.button');
const numberofImage = document. querySelectorAll('.slider img').length;

let imageIndex = 1;
let translateX = 0;



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