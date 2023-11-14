/* PRELOADER */
const preloader = document.querySelector("[data-preloader]")

window.addEventListener("load", function () {
  preloader.classList.add("loaded")
  document.body.classList.add("loaded")
})

/* MOBILE NAV TOGGLE */
const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]")

const toggleNavbar = function () {
  navbar.classList.toggle("active")
}

navToggler.addEventListener("click", toggleNavbar)

/* Active header when window scrolled */
const header = document.querySelector("[data-header]")

const activeHeader = function () {
  if (window.scrollY > 50) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
}

window.addEventListener("scroll", activeHeader)
