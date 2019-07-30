const doc = document;
let slide = doc.querySelectorAll('.slider__slide');
let dot = doc.querySelectorAll('.testimonials__dot');

dot[0].classList.add('active');
slide[0].classList.add('show');
let one = dot[0];
let two = slide[0];


for( let i=0; i < dot.length; i++){
    
    dot[i].onclick = function(){
        
        console.log('push');
        dot[i].classList.add('active');
        slide[i].classList.add('show');
        one.classList.remove('active');
        two.classList.remove('show');
        one = dot[i];
        two = slide[i];
    };
}

//parallax

let boarder = doc.querySelector('.header__boarder');
let heel = doc.querySelector('.header__heel');
let mountains = doc.querySelector('.header__mountains');

let scrolled = 0;

window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled + 'px');
    boarder.style.top = scrolled/100 + 27 + '%';
    boarder.style.left = scrolled/100 + 41 + '%';
    mountains.style.bottom = '-' + scrolled*1.1 + 'px';
    // scrolled > 0 ? heel.style.zIndex = 2:heel.style.zIndex = 0;
}