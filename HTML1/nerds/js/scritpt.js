/* Popup open/close */
let callBackModal = document.querySelector('.writeus');
let callBackButton = document.querySelector('.button-callback');
let callBackClose = document.querySelector('.button-close');

callBackButton.addEventListener('click', function () {
    callBackModal.removeAttribute('hidden');
    let setStartFocus = callBackModal.querySelector('.writeus-name-input');
    setStartFocus.focus();
});

callBackClose.addEventListener('click', function () {
    callBackModal.hidden=true;
});

document.addEventListener('keydown', function(evt){
    if (!callBackModal.hasAttribute('hidden') && evt.key === 'Escape') {
        callBackModal.hidden=true;
    };  
  });


/* Popup submit control */
let callBackForm = callBackModal.querySelector('form');
callBackForm.addEventListener('submit', function(evt){
    var userName = callBackForm.querySelector('.writeus-name-input');
    var userEmail = callBackForm.querySelector('.writeus-email-input');
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        window.alert('Заполните поля Имя и Имейл');
    };
});
/* Slider controls */
let slides = document.querySelectorAll('.feature-item');
let sliderControls = document.querySelectorAll('.slider-control');

let slideChange = function(slideNumber) {
    let activeSlide = document.querySelector('li.feature-item:not(.item-hidden)');
    activeSlide.classList.add('item-hidden');
    slides[slideNumber].classList.remove('item-hidden');
};

for (let i = 0; i < sliderControls.length; i++) {
    let sliderControl = sliderControls[i];
    sliderControl.addEventListener('click', function(){
        let lastActive = document.querySelector('.slider-control.active');
        lastActive.classList.remove('active');
        sliderControl.classList.add('active');
        slideChange(i);
    });
};
