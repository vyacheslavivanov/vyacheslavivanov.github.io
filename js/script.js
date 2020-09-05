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

    $('.disactive-on-load').removeClass("active");

    $("#phone").mask("+9 (999) 99-99-999");

    $('.menu-small-show')
		.click(function(){
			$('.menu-small').show();
		});  

    $('.menu-small-hide')
		.click(function(){
			$('.menu-small').hide();
		}); 

	$('.popup-show')
		.click(function(){
			$('.popup-container').show();
		});	


	$('.popup__close')
		.click(function(){
			$('.popup-container').hide();
			$('.popup__more').hide();
		});

	$('.more__img')
		.click(function(){
			$('.popup__more').slideToggle();
			$('.more__img').toggleClass('more__transform');
		});


	$('.popup-container')
		.click(function(event){
			if(event.target == this) {
				$(this).hide();
				$('.popup__more').hide();
			}
		});


	$('.about__button')
		.click(function(){
			$('#popup__tittle').html('Узнать больше');
			$('.popup__more').show();
		});

	$('.header__button')
		.click(function(){
			$('#popup__tittle').html('Обратный звонок');
		});

	$('.services__button')
		.click(function(){
			$('#popup__tittle').html('Узнать стоимость');
			$('.popup__more').show();
		});

	$('.work__button')
		.click(function(){
			$('#popup__tittle').html('Заказать проект');
			$('.popup__more').show();
		});

	$('.contacts__button')
		.click(function(){
			$('#popup__tittle').html('Обратный звонок');
		});


	$(function(){
		$('#form').validate({
			 rules: {
			 fio: {
			 	required: true,
			 	minlength: 2
			 },
			 tel: 'required',
			 email: {
			 	email: true,
			 }
			 },
			 messages: {
			 fio: {
			 required: "Необходимо ввести ФИО",
			 minlength: "Введите не менее 2-х символов в поле 'Имя'"
			 },
			 email: {
		     required: "Введите e-mail",
			 email: "Адрес должен быть вида name@domain.com"
				},
			 tel: {
			 required: "Необходимо ввести телефон"}
			},
			submitHandler: function() {
				$('.popup-container').hide();
 				$('.success-container').addClass('flex');
     			setTimeout("$('.success-container').removeClass('flex')", 2000);
     			$("#form").trigger("reset");
			}
		});
	}); 

	$('form').submit(function() {

    	var $form = $(this);

    $.post(
        $form.attr('action'), 
        $form.serialize(),    
    )
    return false;
	});

 });

  


