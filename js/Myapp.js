
(function($, document, window){
	
	$(document).ready(function(){

		$(".btn-filter").click(function(){
			$(".filter-section").slideToggle();
			$(".btn-filter").hide();
		});

		$(".btn-apply").click(function(){
			$(".filter-section").slideToggle();
			$(".btn-filter").show();
		});

		$(".btn-cancel").click(function(){
			$(".filter-section").slideToggle();
			$(".btn-filter").show();
		});

		$(".menu").click(function(){
			$("ul").toggleClass("active");
		});

		$(".btn-subscribe").click(function(){
			$(".subscribe").slideToggle();
			// $(".subscribe").css("z-index" , "1000");
		});

	$(window).load(function(){

	});

	
})(jQuery, document, window);

