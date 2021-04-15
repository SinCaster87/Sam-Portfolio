console.log("hello World")
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        }
 }       
})
var owl = $('.owl-carousel');
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');

})
// Go to the previous item
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
    
})