//HAMBURGER
let headerHamburgerMenuBtn = document.querySelector(".header-hamburger-menu-btn");
let headerHamburgerMenu = document.querySelector(".header-hamburger-menu")

headerHamburgerMenuBtn.addEventListener("click", function(){
  headerHamburgerMenuBtn.classList.toggle("active");
  headerHamburgerMenu.classList.toggle("active");
})

//change color on click
const hamburgerMain = document.getElementById("hamburgerMain");
hamburgerMain.addEventListener("click", function(){
  hamburgerMain.style.color="red";
})

// BLOG. BUTTON ON CLICK



// MEDIA. HOVER ON BEHANCE
function hoverOnBehance() {
  document.getElementById("behance-subtittle-arrow").classList.add("active");
}
function hoverOffBehance() {
  document.getElementById("behance-subtittle-arrow").classList.remove("active");
}


let clickOnBehance = document.querySelector(".behance");
clickOnBehance.addEventListener("click", function(){
  clickOnBehance.classList.toggle("active");
})

// MEDIA. HOVER ON BEHANCE ARROW
function hoverOnArrow() {
  document.getElementById("black-arrow").classList.add("active");
}
function hoverOffArrow() {
  document.getElementById("black-arrow").classList.remove("active");
}


// MEDIA. HOVER ON GITHUB
function hoverOnGithub() {
  document.getElementById("github-subtittle-arrow").classList.add("active");
}
function hoverOffGithub() {
  document.getElementById("github-subtittle-arrow").classList.remove("active");
}
// MEDIA. HOVER ON GITHUB ARROW
function hoverOnArrowGit() {
  document.getElementById("black-arrow-git").classList.add("active");
}
function hoverOffArrowGit() {
  document.getElementById("black-arrow-git").classList.remove("active");
}


// MEDIA. HOVER ON TELEGRAM
function hoverOnTelegram() {
  document.getElementById("telegram-subtittle-arrow").classList.add("active");
}
function hoverOffTelegram() {
  document.getElementById("telegram-subtittle-arrow").classList.remove("active");
}
// MEDIA. HOVER ON TELEGRAM ARROW
function hoverOnArrowTelegram() {
  document.getElementById("black-arrow-telegram").classList.add("active");
}
function hoverOffArrowTelegram() {
  document.getElementById("black-arrow-telegram").classList.remove("active");
}


// MEDIA. HOVER ON TWITTER
function hoverOnTwitter() {
  document.getElementById("twitter-subtittle-arrow").classList.add("active");
}
function hoverOffTwitter() {
  document.getElementById("twitter-subtittle-arrow").classList.remove("active");
}
// MEDIA. HOVER ON TWITTER ARROW
function hoverOnArrowTwitter() {
  document.getElementById("black-arrow-twitter").classList.add("active");
}
function hoverOffArrowTwitter() {
  document.getElementById("black-arrow-twitter").classList.remove("active");
}

// MEDIA. HOVER ON offer
function hoverOnOffer() {
  document.getElementById("black-arrow-offer").classList.add("active");
}
function hoverOffOffer() {
  document.getElementById("black-arrow-offer").classList.remove("active");
}

// STORE. HOVER ON NEWSPAPER
function hoverOnNewspaper() {
  document.getElementById("web-link-newspaper").classList.add("active");
}
function hoverOffNewspaper() {
  document.getElementById("web-link-newspaper").classList.remove("active");
}


// MEDIA. HOVER ON TWITTER ARROW
// function hoverOnNews() {
//   document.getElementById("black-arrow-news").classList.add("active");
// }
// function hoverOffNews() {
//   document.getElementById("black-arrow-news").classList.remove("active");
// }
