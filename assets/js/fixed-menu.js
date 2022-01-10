document.addEventListener("DOMContentLoaded", function(){
      
  window.addEventListener('scroll', function() {
       
    if (window.scrollY > 200) {
      document.getElementById('navbar_top').classList.add('fixed-top-menu');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').clientHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
       document.getElementById('navbar_top').classList.remove('fixed-top-menu');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
  });
}); 
// DOMContentLoaded  end
jQuery(document).ready(function(){
jQuery('a').on('click', function(event) {
    var hash = this.hash;
    if(hash!=''){
   event.preventDefault();
   jQuery('html, body').animate({scrollTop: jQuery(hash).offset().top - 100}, 300);
    }
});
})

// Cache selectors
var topMenu = jQuery(".onepage-nav"),
topMenuHeight = topMenu.outerHeight() + 150,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function () {
var item = jQuery(jQuery(this).attr("href"));
if (item.length) {
  return item;
}
});

// Bind to scroll
jQuery(window).scroll(function () {
// Get container scroll position
var fromTop = jQuery(this).scrollTop() + topMenuHeight;

// Get id of current scroll item
var cur = scrollItems.map(function () {
if (jQuery(this).offset().top < fromTop) return this;
});
// Get the id of the current element
cur = cur[cur.length - 1];
var id = cur && cur.length ? cur[0].id : "";
// Set/remove active class
menuItems
.parent()
.removeClass("active")
.end()
.filter("[href='#" + id + "']")
.parent()
.addClass("active");
});

