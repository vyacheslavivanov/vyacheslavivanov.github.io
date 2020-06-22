$(document).ready(function(){
        let wrapper1 = document.querySelector('.wrapper-div');
        let wrapper2 = document.querySelector('.wrapper-brackets');
        let wrapper3 = document.querySelector('.wrapper-lattice');
        let wrapper4 = document.querySelector('.wrapper-slash');
        let wrapper5 = document.querySelector('.wrapper-div__second');
        let wrapper6 = document.querySelector('.wrapper-slash__second');
        let wrapper7 = document.querySelector('.wrapper-div-price');
        let wrapper8 = document.querySelector('.wrapper-brackets-price');
        let wrapper9 = document.querySelector('.wrapper-lattice-price');
        let wrapper10 = document.querySelector('.wrapper-slash-price');
        let wrapper11 = document.querySelector('.wrapper-brackets-price__second');

        wrapper1.classList.remove("active")
        wrapper2.classList.remove("active")
        wrapper3.classList.remove("active")
        wrapper4.classList.remove("active")
        wrapper5.classList.remove("active")
        wrapper6.classList.remove("active")
        wrapper7.classList.remove("active")
        wrapper8.classList.remove("active")
        wrapper9.classList.remove("active")
        wrapper10.classList.remove("active")
        wrapper11.classList.remove("active")

        $("#phone").mask("+9 (999) 99-99-999")

        $('.header__nav_button')
		.click(function(){
			$('.menu-small').show()
		});

	$('.header__nav_button-small')
		.click(function(){
			$('.menu-small').show()
		});	

	$('.menu-small__close')
		.click(function(){
			$('.menu-small').hide()
		});	

	$('.menu-small__services')
		.click(function(){
			$('.menu-small').hide()
		});	

	$('.menu-small__portfolio')
		.click(function(){
			$('.menu-small').hide()
		});

	$('.menu-small__cost')
		.click(function(){
			$('.menu-small').hide()
		});

	$('.header__button')
		.click(function(){
			$('.popup-container').show()
		});	

	$('.work__button')
		.click(function(){
			$('.popup-container').show()
		});

	$('.contacts__button')
		.click(function(){
			$('.popup-container').show()
		});
		
	$('.about__button')
		.click(function(){
			$('.popup-container').show()
		});

	$('.call__icon')
		.click(function(){
			$('.popup-container').show()
		});

	$('.services__button')
		.click(function(){
			$('.popup-container').show()
		});

	$('.close-svg')
		.click(function(){
			$('.popup-container').hide()
		});

	$('.popup-container')
		.click(function(event){
			if(event.target == this) {
				$(this).hide();
			}
		});
		
	$(function(){
	 $('#form').validate({
	 rules: {
	 name: {
	 required: true,
	 minlength: 2
	 }
	 },
	 messages: {
	 fio: {
	 required: "Необходимо ввести ФИО",
	 minlength: "Введите не менее 2-х символов в поле 'Имя'"
	 },
	 tel: {
	 required: "Необходимо ввести телефон"}
		}
	 });
	}); 

	$('form').submit(function() {

    var $form = $(this);

    $form.find('.error').remove();

    if ($form.find('input[name=fio]').val() === '') {

    $form.find('input[name=fio]')
      .before('<div class="error"></div>');

    return false;
    }

    if ($form.find('input[name=tel]').val() === '') {

    $form.find('input[name=tel]')
       .before('<div class="error"></div>');

    return false;
    }

    $.post(
        $form.attr('action'), 
        $form.serialize(),     
    )
    .done(function() {
    	$('.popup-container').hide();
    	$('.success-container').addClass('flex');
    	setTimeout("$('.success-container').removeClass('flex')", 2000)
    });

    return false;
	});
 });




