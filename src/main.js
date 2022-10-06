// import { Application } from "../node_modules/@splinetool/runtime/runtime.d.ts";
// const canvas = document.getElementById("canvas3d");
// const app = new Application(canvas);
// app.load("https://prod.spline.design/GoYqupt3eYz89pUl/scene.splinecode");

// Animate when scrolling HOME
const observerHome = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#home .container");

    if (entry.isIntersecting) {
      square.classList.add("animate__animated");
      square.classList.add("animate__fadeIn");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animate__animated");
    square.classList.remove("animate__fadeIn");
  });
});

observerHome.observe(document.querySelector("#home.section"));

// Animate when scrolling ABOUT
const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#about .container");

    if (entry.isIntersecting) {
      square.classList.add("animate__animated");
      square.classList.add("animate__fadeIn");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animate__animated");
    square.classList.remove("animate__fadeIn");
  });
});

observerAbout.observe(document.querySelector("#about.section"));

// Animate when scrolling SKILLS
const observerskills = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#skills .container");

    if (entry.isIntersecting) {
      square.classList.add("animate__animated");
      square.classList.add("animate__fadeIn");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animate__animated");
    square.classList.remove("animate__fadeIn");
  });
});

observerskills.observe(document.querySelector("#skills.section"));

// Animate when scrolling SERVICES
const observerServices = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#services .container");

    if (entry.isIntersecting) {
      square.classList.add("animate__animated");
      square.classList.add("animate__fadeIn");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animate__animated");
    square.classList.remove("animate__fadeIn");
  });
});

observerServices.observe(document.querySelector("#services.section"));
// Animate when scrolling WORKS
const observerWorks = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#test .container");

    if (entry.isIntersecting) {
      square.classList.add("animate__animated");
      square.classList.add("animate__fadeIn");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animate__animated");
    square.classList.remove("animate__fadeIn");
  });
});

observerWorks.observe(document.querySelector("#test.section"));

// Animate when scrolling CONTACT
const observerContact = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#contact .container");

    if (entry.isIntersecting) {
      square.classList.add("animate__animated");
      square.classList.add("animate__fadeIn");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animate__animated");
    square.classList.remove("animate__fadeIn");
  });
});

observerContact.observe(document.querySelector("#contact.section"));

// Make animate.css animation twice longer to complete
document.documentElement.style.setProperty("--animate-duration", "2.5s");

// Navbar scrollspy
$(function () {
  var link = $("#navbar a.dot");

  // Move to specific section when click on menu link
  link.on("click", function (e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
    $(this).addClass("active");
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on("scroll", function () {
    scrNav();
  });

  // scrNav function
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $("section").each(function () {
      var id = $(this).attr("id"),
        offset = $(this).offset().top,
        height = $(this).height();
      // console.log("section: ", $(this));
      // console.log("sTop: ", sTop);
      // console.log("offset: ", offset);
      // console.log("$(this).offset(): ", $(this).offset());
      // console.log("offsetHeight: ", $(this)[0].offsetHeight);
      // console.log("offsetTop: ", $(this)[0].offsetTop);

      // console.log("height: ", height);

      if (sTop >= offset / 1.3 && sTop < offset / 1.3 + height) {
        link.removeClass("active");
        $("#navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }
  scrNav();
});
