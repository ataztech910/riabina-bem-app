var position = $(this).scrollTop();
changeTop(position);
function changeTop(position){
	if(position>0){
		$('.fixedHeader').switchClass('fixedHeader--normal','fixedHeader--gray',500, "easeInOutQuad" );
		$('.header__logo--normal').hide();
		$('.header__logo--scroll').show();
		$('.menuList__Link').addClass('menuList__Link--white');
		$('.topphone__label').addClass('topphone__label--white');
		$('.topphone__label').removeClass('topphone__label--black');
		$('.topphone').addClass('topphone--white');
		$('.topphone').removeClass('topphone--red');
	}
	else{
		$('.fixedHeader').switchClass('fixedHeader--gray','fixedHeader--normal',500, "easeInOutQuad");
		$('.header__logo--normal').show();
		$('.header__logo--scroll').hide();
		$('.menuList__Link').removeClass('menuList__Link--white');
		$('.topphone__label').removeClass('topphone__label--white');
		$('.topphone__label').addClass('topphone__label--black');
		$('.topphone').addClass('topphone--red');
		$('.topphone').removeClass('topphone--white');
	}
}

	
$(document).scroll(function(){
	
	var position = $(this).scrollTop();
	changeTop(position);
	
})