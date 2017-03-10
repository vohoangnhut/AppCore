// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$.backstretch([
	"img/bg1.jpg","img/bg2.jpg","img/bg3.jpg"
  ], {duration: 3000, fade: 750});

//Slim Scroll
$('.full-screem-wrap').slimscroll({
  height: '100vh'
});