const navbar = document.getElementById("navigation");
const scrollToTop = document.getElementById("top-btn");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    scrollToTop.classList.remove("topbtn-gone");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
      scrollToTop.style.transform = "translateY(30px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrollToTop.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrollToTop.classList.add("topbtn-gone");
    scrolled = false;
  }
};

// Navbar scroll

$("#showcase a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

$("#top.btn").on("click", function (r) {
  if (this.hash !== "") {
    r.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

const sectionAboutEl = document.querySelector(".section-about");

const sectionContainer2El = document.querySelector(".section-container2");

const sectionContainer3El = document.querySelector(".section-container3");

const sectionContainerEl = document.querySelector(".section-container");

const ourStory2El = document.querySelector(".story2");

const ourStory3El = document.querySelector(".story3");

const locationsEl = document.querySelector(".place");

const locations3El = document.querySelector(".place3");

const awardsEl = document.querySelector(".award");

const awards2El = document.querySelector(".award2");

ourStory2El.addEventListener("click", () => {
  sectionContainer2El.classList.add("hidden");
  sectionContainerEl.classList.remove("hidden2");
});

ourStory3El.addEventListener("click", () => {
  sectionContainer3El.classList.add("hidden3");
  sectionContainer2El.classList.add("hidden");
  sectionContainerEl.classList.remove("hidden2");
});

locations3El.addEventListener("click", () => {
  sectionContainer3El.classList.add("hidden3");
  sectionContainer2El.classList.remove("hidden");
  sectionContainerEl.classList.add("hidden2");
});

locationsEl.addEventListener("click", () => {
  sectionContainerEl.classList.add("hidden2");
  sectionContainer2El.classList.remove("hidden");
});

awardsEl.addEventListener("click", () => {
  sectionContainerEl.classList.add("hidden2");
  sectionContainer3El.classList.remove("hidden3");
});

awards2El.addEventListener("click", () => {
  sectionContainerEl.classList.add("hidden2");
  sectionContainer3El.classList.remove("hidden3");
  sectionContainer2El.classList.add("hidden");
});

// Image Slide show

const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll(".box");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${
    (currentImg - 1) * 1100
  }px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
