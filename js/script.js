var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper6", {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // swipper in who we ?
  var swiper = new Swiper(".mySwiperWh", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

  // $(document).ready(function(){
  //   $(".icon-footer").click(function(){
  //     $(".arr-footer").slideToggle("slow");
  //   });
  // });


function scrollToTop() {
  window.scrollTo(0, 0);
}

var activeButt = document.getElementById("btnn");
activeButt.addEventListener("click" , function(){

  activeButt.classList.toggle("removeBG");
})


// To Show Password in login Page
function showPass(){
  let show = document.getElementById("show-pass");
  if (show.type==="password"){
    show.type="text";
  }
  else {
    show.type="password";
  }
}


