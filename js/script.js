// $('.navbar').scroll
// $(function () {
// 	var winH = $(window).height(),
// 		sec1 = $('.sec-one').height(),
// 		sec2 = $('.sec-two').height(),
// 		sec3 = $('.sec-three').height(),
// 		sec4 = $('.sec-four').height(),
// 		sec5 = $('.sec-five').height(),
// 		sec6 = $('.sec-sex').height(),
// 		footer = $('footer').height(),
// 		navH = $('.navbar').innerHeight();
// 	var winn=winH-navH;
	
// });
     
window.onscroll = function(){myFunction();};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  if (winScroll) {
	  $("body").addClass('onScroll');
	  $(".navbar").css("position" , "fixed");
	  $("body").css("paddingTop", $(".navbar").innerHeight());
}
}
