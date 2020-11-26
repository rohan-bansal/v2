// $(document).ready(function() {
//     var width = document.getElementById("name-div").style.width;
//     document.getElementById("intro-div").style.width = width;
// });

new TypeIt('#type-text', {
    speed: 100
})
.pause(1500)
.type("Developer. ")
.pause(500)
.type("Linux Enthusiast. ")
.pause(500)
.type("Guitarist.")

.options({loop: false, lifeLike: true})
.go();



$('.work-exp').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });