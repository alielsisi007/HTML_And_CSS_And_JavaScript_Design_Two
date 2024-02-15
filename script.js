// Git slider items
let sliderCunte = Array.from(document.querySelectorAll(".slider img "));
// Git slder length
let sliderLen = sliderCunte.length;
// current slide
let currentSlide = 1;
//slide number string element
let slideNumber = document.getElementById("slide-number");
// prev and next buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
// handle click on prev and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Get The New Ceated UL
let listUl = Array.from(document.querySelectorAll(".bullts li"));
// Loop Through All Bullets Items
for (let i = 0; i < listUl.length; i++) {
  listUl[i].onclick = function () {
    currentSlide = listUl[i].getAttribute("data-index");
    theChecker();
  };
}
theChecker();

// function nextSlide
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
  } else {
    currentSlide++;
    theChecker();
  }
}
// function prevSlide
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  removeAllActive();
  // Set Active Class On Currnt Slide
  sliderCunte[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  listUl[currentSlide - 1].classList.add("active");
  // Check if current slide is first
  if (currentSlide == 1) {
    // Add Disabled Class on Prevous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class from Prevous Button
    prevButton.classList.remove("disabled");
  }
  // Check if current slide is the last
  if (currentSlide == sliderLen) {
    // Add Disabled Class on next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class from Prevous Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
  // Loop Through imgaes
  sliderCunte.forEach(function (img) {
    img.classList.remove("active");
  });
  // Loop Through Pagintion Bullets
  listUl.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

// Start Shuffle Move ----------
// Shuffle Buttons
let shuffle = Array.from(document.querySelectorAll(".shuffle li"));
let all = shuffle[0];
let app = shuffle[1];
let photo = shuffle[2];
let web = shuffle[3];
let print = shuffle[4];
let shuffleCunte = shuffle.length;
// Assign event handlers to each li element
all.onclick = function () {
  removeAllActiveOnBoxImg();
  all.classList.add("active");
  for (let i = 0; i < imgBoxCunt; i++) {
    if (boxCategory[i].classList.contains("all")) {
    }
  }
};
app.onclick = function () {
  removeAllActiveOnBoxImg();
  app.classList.add("active");
  for (let i = 0; i < imgBoxCunt; i++) {
    if (boxCategory[i].classList.contains("app")) {
    } else {
      boxCategory[i].classList.add("disabled");
    }
  }
};

photo.onclick = function () {
  removeAllActiveOnBoxImg();
  photo.classList.add("active");
  for (let i = 0; i < imgBoxCunt; i++) {
    if (boxCategory[i].classList.contains("photo")) {
    } else {
      boxCategory[i].classList.add("disabled");
    }
  }
};

web.onclick = function () {
  removeAllActiveOnBoxImg();
  web.classList.add("active");
  for (let i = 0; i < imgBoxCunt; i++) {
    if (boxCategory[i].classList.contains("web")) {
    } else {
      boxCategory[i].classList.add("disabled");
    }
  }
};

print.onclick = function () {
  removeAllActiveOnBoxImg();
  print.classList.add("active");
  for (let i = 0; i < imgBoxCunt; i++) {
    if (boxCategory[i].classList.contains("print")) {
    } else {
      boxCategory[i].classList.add("disabled");
    }
  }
};

// set the box img id effcit
let boxCategory = Array.from(
  document.querySelectorAll(".image-contanier .img-box")
);
let imgBoxCunt = boxCategory.length;
function removeAllActiveOnBoxImg() {
  // Loop Through imgaes
  boxCategory.forEach(function (box) {
    box.classList.remove("disabled");
  });
  // Loop Through Pagintion Bullets
  shuffle.forEach(function (buttons) {
    buttons.classList.remove("active");
  });
}
chiker2();
// The Chiker
function chiker2() {
  removeAllActiveOnBoxImg();
  // Set Active Class On shuffle
  all.classList.add("active");
}
// End Shuffle Move ----------
// Start Client --------------
// set the box img id effcit
let slideClient = Array.from(
  document.querySelectorAll(".image-slider .images")
);
console.log(slideClient);
let ClientLen = slideClient.length;

let listBullts = Array.from(document.querySelectorAll(".bullts2  li"));

let bulletLen = listBullts.length;

currentClint = 1;

for (let i = 0; i < bulletLen; i++) {
  listBullts[i].onclick = function () {
    currentClint = listBullts[i].getAttribute("data-index");
    listBullts[i].classList.add("active");
    chiker3();
  };
}
chiker3();
function removeAllDisabled() {
  // Loop Through imgaes
  slideClient.forEach(function (images) {
    images.classList.remove("active");
  });

  listBullts.forEach(function (bullet2) {
    bullet2.classList.remove("active");
  });
}

// The Chiker
function chiker3() {
  removeAllDisabled();

  // Set Active Class On Currnt Slide

  slideClient[currentClint - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  listBullts[currentClint - 1].classList.add("active");
}

// End Client --------------
