window.onscroll = function() {changeNavbar()};

let navTogglerOpen = false;

document.getElementById("nav-mob-toggler").addEventListener("click", clicked);

let moreBtn = document.querySelectorAll(".read-more-btn");
moreBtn.forEach(btn => {
  btn.addEventListener('click', readMore);
});

function clicked() {
  if (navTogglerOpen == false) {
    navTogglerOpen = true;
    changeNavbar();
  }
  else {
    navTogglerOpen = false;
    changeNavbar();
  }
}

function changeNavbar() {

  let navbar = document.getElementById("navbar1").classList;

  if (document.documentElement.scrollTop > 30 || navTogglerOpen == true) {
    navbar.remove("navbar-dark");
    navbar.add("navbar-light", "bg-light");

    document.getElementById("header-icons").className = "icon-dark";
  }
  else {
    navbar.remove("bg-light", "navbar-light");
    navbar.add("navbar-dark");

    document.getElementById("header-icons").className = "icon-light";
  }
}

function readMore() {
  let readMoreBtn = this;

  console.log(readMoreBtn);

  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerHTML = "Read Less";
  } else {
    readMoreBtn.innerHTML = "Read More";
  }

  let btnId = "prod-text-";
  btnId = btnId.concat(readMoreBtn.id.slice(-1));

  document.getElementById(btnId).classList.toggle("show-more");
}