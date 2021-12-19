var count=1;
setInterval(function(){
    document.getElementById('r'+count+'button').checked=true;
    count++;
    if(count>4){
        count=1;
    }
},5000);
$(function(){
	$('.box-menu .wrapper').on('click', function(){
		$('.box-menu').toggleClass('full-menu');
		$('.hamburger').toggleClass('active');
	});
	$('a').on('click', function(){
		$(this).siblings('a').removeClass('active');
		$(this).addClass('active');
	});
});



var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}