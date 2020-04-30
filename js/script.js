
		let containerEl = document.querySelector('.container');

		let mixer = mixitup(containerEl);
		

		
			

            

	$(window).scroll(function () {

	// scrollTop button

		let buttonTop = $('.scroll-top');
		if($(window).scrollTop()>=2000){
			buttonTop.fadeIn(500);
			// console.log('dfds')
		}else{
			buttonTop.fadeOut(500);
		}
	});

			 $('.scroll-top').click(function () {

			$('html, body').animate({

				scrollTop:0

			},1000);

			});
/* popup*/
let mypopup = document.getElementById('mypopup');
function closepopup(){
	mypopup.style.display = "none";
}
	function shwpopup() {
	setTimeout(function(){ 

		mypopup.style.display = "block";

	 }, 3000);
	}

	shwpopup() 

	/* popup*/