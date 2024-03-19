(function () {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };


 
  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  // Scroll event
  let navbarlinks = select(".nav-link", true);
  const navbarlinkActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        if(navbarlink.getAttribute("href") !== "#contactus") navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinkActive);
  onscroll(document, navbarlinkActive);


  var navLinksOnClick = document.querySelectorAll('.nav-link');

  navLinksOnClick.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
    
      // Remove active class from all links
      navLinksOnClick.forEach(function(link) {
        link.classList.remove('active');
      });

      // Add active class to the clicked link
     if(this.getAttribute("href") !=="#contactus" ) this.classList.add('active');
    });
  });


  var texts = ["Create", "Build", "Organizing","Develop"]; // Array of text to display
  var currentIndex = 0;
  
  function slideText() {
      $(".item").text(texts[currentIndex]); // Set text from the array
      
      // Slide animation
      $(".item").animate({
          marginTop: 0
      }, 2000, function() {
          // Animation complete. Move text to bottom and increment index
          $(".item").css("marginTop", "100%");
          $(".item").css("transition","marginTop 2000ms");
          currentIndex = (currentIndex + 1) % texts.length;
      });
  }
  
  // Initial slide
  slideText();
  
  // Call slideText function at intervals for infinite looping
  setInterval(slideText, 2000); // Change interval as needed (milliseconds)
  
  

 
  
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  let selectTopbar = select(".fixed-top");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        if (selectTopbar) {
          selectTopbar.classList.add("topbar-scrolled");
          selectTopbar.classList.remove("bg-transparent");
        }
      } else {
        selectHeader.classList.remove("header-scrolled");
        if (selectTopbar) {
          selectTopbar.classList.add("bg-transparent");
          selectTopbar.classList.remove("topbar-scrolled");
        }
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  let selectTogglerHeader = select(".navbar-toggler");
  selectTogglerHeader.addEventListener("click", () => {
    let hasTopbar = selectTopbar.classList.contains("topbar-scrolled");
    if (!hasTopbar) {
      selectTopbar.classList.toggle("topbar-scrolled");
    }
  });

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();



