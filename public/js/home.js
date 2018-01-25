// function main(){
//     renderSlideshow();
// }

// function renderSlideshow(){
//     $(document).ready(function() {
//         $('#slideshow').cycle({
//         fx: 'fade',
//         pager: '#smallnav',
//         pause:   1,
//         speed: 1800,
//         timeout:  3500
//         });
//     });
// }


// main();

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});