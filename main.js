// custom cursor
const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');
const current = document.querySelector('.cursor-1 .current');


// onouse move 
window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
};

document.querySelectorAll('a').forEach(links => {

  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
    current.classList.add('active');
  };

  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
    current.classList.remove('active');
  };

});


// swiper js
let swiper = new Swiper(".popular-content", {
     loop: true,
     slidesPerView: 1,
     spaceBetween: 10,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
     },
});

// show video 
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let closeBtn = document.querySelector('.close-video');
let myvideo = document.querySelector('#myvideo');
// jumanji movie btn
let watchNow = document.querySelector('#watch-now');


playButton.onclick = () => {
  video.classList.add('show-video');
  // Auto play when click on button
  myvideo.play();
};

// jumanji movie js
watchNow.onclick = () => {
  video.classList.add('show-video');
  // Auto play when click on button
  myvideo.play();
};


closeBtn.onclick = () => {
  video.classList.remove('show-video');
  // Pause when click close button
  myvideo.pause();
};


