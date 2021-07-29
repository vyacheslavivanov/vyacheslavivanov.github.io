// steps

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__step-button').forEach(function(stepBtn) {
    stepBtn.addEventListener('click', function(event) {
      
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.work__wrapper').forEach(function(stepContent) {
        stepContent.classList.remove('step-content-active');

        document.querySelector(`[data-target="${path}"]`).classList.add('step-content-active');
        document.querySelector(`[data-path="${path}"]`).classList.add('step-button-active');
      });

      document.querySelectorAll('.work__step-button').forEach(function(stepContent) {
        stepContent.classList.remove('step-button-active');

        document.querySelector(`[data-path="${path}"]`).classList.add('step-button-active');
      });
    });   
  });
});

// accordion

$( function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content"
  });
} );

// burger

document.querySelector('.header__burger').addEventListener('click', function() {

  document.querySelector('.header__burger-open').classList.add('header__burger-active')

});

document.querySelector('.header__burger-close-button').addEventListener('click', function() {

  document.querySelector('.header__burger-open').classList.remove('header__burger-active')

});