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

