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
});

// for changing Email
var changeEmailBtn = document.getElementById("changeEmail");
var overlayEmail = document.getElementById("overlay-email");
var closeEmailBtn = document.getElementById("closeEmail");
changeEmailBtn.addEventListener("click", function(){
    overlayEmail.classList.toggle("show-change");
});
closeEmailBtn.addEventListener("click" , function(){
    overlayEmail.classList.toggle("show-change");
});

// for changing Phone
var changePhoneBtn = document.getElementById("changePhone");
var overlayPhone = document.getElementById("overlay-phone");
var closePhoneBtn = document.getElementById("closePhone");
changePhoneBtn.addEventListener("click", function(){
    console.log("phone");
    overlayPhone.classList.toggle("show-change");
});
closePhoneBtn.addEventListener("click" , function(){
    console.log("close phone");
    overlayPhone.classList.toggle("show-change");
});

// for changing pass
var changePassBtn = document.getElementById("changePass");
var overlayPass = document.getElementById("overlay-pass");
var closePassBtn = document.getElementById("closePass");
changePassBtn.addEventListener("click", function(){
    overlayPass.classList.toggle("show-change");
});
closePassBtn.addEventListener("click" , function(){
    overlayPass.classList.toggle("show-change");
});

// for showing Password
function myFunction() {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function myFunction2() {
    var x = document.getElementById("pass2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function myFunction3() {
    var x = document.getElementById("pass3");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }