var index = 0;
$('.menuList__element').mouseover(function(){
	
	if(index==0){
		index = 1;
		console.log('you have entered');
		$(this).find('.menuList__link').addClass('menuList__link--active');
		$(this).find('.menuList__link__second__div').fadeIn();
	}
	
});

$('.menuList__element').mouseleave(function(){
	
	console.log('you have left');
	index = 0;
	$(this).find('.menuList__link').removeClass('menuList__link--active');
	$(this).find('.menuList__link__second__div').fadeOut();
	
	
})

