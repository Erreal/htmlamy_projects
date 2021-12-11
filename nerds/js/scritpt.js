/* Popup open/close */
let callBackForm = document.querySelector('.writeus');
let callBackButton = document.querySelector('.button-callback');
let callBackClose = document.querySelector('.button-close');

callBackButton.addEventListener('click', function () {
    callBackForm.removeAttribute('hidden');
});

callBackClose.addEventListener('click', function () {
    callBackForm.setAttribute('hidden', 'hidden');
});

document.addEventListener('keydown', function(evt){
    //console.log(evt.key);
    if (!callBackForm.hasAttribute('hidden') && evt.key === 'Escape') {
        callBackForm.setAttribute('hidden', 'hidden');
    }  
  });
