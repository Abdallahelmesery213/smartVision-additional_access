function scrollToTop() {
    window.scrollTo(0, 0);
  }

// for changing name
var changeNameBtn = document.getElementById("changeName");
var overlayProfile = document.getElementById("overlay-profile");
var closeBtn = document.getElementById("close");
changeNameBtn.addEventListener("click", function(){
  overlayProfile.classList.toggle("show-change");
});
closeBtn.addEventListener("click", function(){
    overlayProfile.classList.toggle("show-change");
})

// for changing Email
var changeEmailBtn = document.getElementById("changeEmail");
var overlayEmail = document.getElementById("overlay-email");
var closeEmailBtn = document.getElementById("closeEmail");
changeEmailBtn.addEventListener("click", function(){
    overlayEmail.classList.toggle("show-change");
});
closeEmailBtn.addEventListener("click" , function(){
    overlayEmail.classList.toggle("show-change");
})

// // for changing Phone
// var changePhoneBtn = document.getElementById("changePhone");
// var overlayPhone = document.getElementById("overlay-Phone");
// var closePhoneBtn = document.getElementById("closePhone");
// changePhoneBtn.addEventListener("click", function(){
//     overlayPhone.classList.toggle("show-change");
// });
// closePhoneBtn.addEventListener("click" , function(){
//     overlayPhone.classList.toggle("show-change");
// })