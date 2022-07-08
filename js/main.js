
//SideBar active.
const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');

cargarEventListener();
function cargarEventListener() {

    menuBtn.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
};

// Carousel para Section properties with Splide.js
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        width: '100%',
        pagination: false,
        type: 'loop',
        breakpoints: {
            1140: {
                perPage: 2,
            },
            780: {
                perPage: 1,
            },
        },
    }).mount();
});

// Carousel for Blog Section
const carrouselNews = document.querySelector('.blog__carrousel');
const pointControl = document.querySelectorAll('.blog__control-point');

pointControl.forEach((cadaPunto, i) => {
    pointControl[i].addEventListener('click', () => {

        let positionNews = i;
        let positionCalculation = positionNews * -33;

        carrouselNews.style.transform = `translateX(${positionCalculation}%)`;

        pointControl.forEach((cadaPunto, i) => {
            pointControl[i].classList.remove('blog__point--active');
        });
        pointControl[i].classList.add('blog__point--active');
    });
});

