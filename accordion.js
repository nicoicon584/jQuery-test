$(document).ready(function(){
	$('.item-wrapper').click(function(){
	
		var curItem = this;

		$('.item-wrapper').each(function(){

			if(this !== curItem){
				
				$(this).find('.acc-item').slideUp();
				$(this).find('i').removeClass('fa-minus-square').addClass('fa-plus-square');

			}

			else {

				$(this).find('.acc-item').slideToggle();
				$(this).find('i').toggleClass('fa-plus-square fa-minus-square');
				
			}

		});
	
	});

});
