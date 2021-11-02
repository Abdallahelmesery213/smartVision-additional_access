// swiper in Courses
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });



  // for scrol top
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  //For Adding Rate
  var rateOverlay = document.querySelector(".rate-overlay");
  var closeBtn = document.getElementById("close");
  var addRateBtn = document.getElementById("add-rate");
  addRateBtn.addEventListener("click",function(){
    rateOverlay.classList.toggle("show-overlay");
  });
  closeBtn.addEventListener("click", function(){
    rateOverlay.classList.toggle("show-overlay");
  })

  
  