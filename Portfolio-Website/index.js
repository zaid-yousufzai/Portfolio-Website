document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Zaid Khan";
    $("#favicon").attr("href", "images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "images/favhand.png");
  }
});

let icon = document.querySelector(" .icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("show");

  if (ul.className == "show") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

let title = document.querySelector(".typing");
let msg = "Software Developer";
let index = 1;

const typeWriter = () => {
  let new_title = msg.slice(0, index);
  title.innerHTML = new_title;

  index > msg.length ? (index = 1) : index++;

  setTimeout(() => typeWriter(), 200);
};
typeWriter();

// trainin
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});


// calculating age

function calculateAge() {
  // Enter your birthdate in the format "YYYY-MM-DD"
  const birthdate = new Date("2001-06-16");
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthdate;

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const age = Math.floor(ageInMilliseconds / millisecondsInYear);

  document.getElementById("age").textContent = age;
}

// Call calculateAge initially
calculateAge();

// Update age every year
setInterval(calculateAge, 1000 * 60 * 60 * 24 * 365.25);

// JavaScript code to scroll to the top of the page

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// not hosted alert

function notHost() {
  alert(
    "Sorry, this Project is not available to View. You can check the code."
  );
}
