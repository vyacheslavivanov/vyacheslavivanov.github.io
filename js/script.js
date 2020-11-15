$(document).ready(function(){
	$(window).on('scroll', function() {
		let $headerLogo = $('.header__logo'),
				$headerItem = $('.item-a')
				scroll = $(this).scrollTop(),
				headerHeight = $('.header').height() - 100;
    if (scroll > headerHeight) {
				$headerLogo.addClass('header__logo_black'),
				$headerItem.addClass('item-a-black');
    } else if (scroll < headerHeight) {
				$headerLogo.removeClass('header__logo_black'),
				$headerItem.removeClass('item-a-black');
    }
});
});

  


