$(function(){
var carouselList = $("#carousel ul");
setTimeout(changeSlide, 3500); 
setInterval(changeSlide, 3500); 

function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
};
	
function moveFirstSlide () {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
};
});
