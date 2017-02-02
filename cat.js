// when a user clicks on one of the thumbnail images, that image 
// should be displayed in the full size image container at the top.

// 1. capture click, capture the corresponding img source of the child.
// 2. replace the img source  of the 'hero' with the src of the clicked thumb. 




$(function() {
  
  $('a.thumbnail').on('click', 'img', function(event) {
    var imgSrc =  $(this).attr("src");
    $(".hero").find("img").attr("src", imgSrc);

  });
});