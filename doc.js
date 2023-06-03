document.addEventListener("DOMContentLoaded", function () {
    Typed.new(".type", {
      strings: ["Développeur Full-Stack !", "Un créateur !"],
      stringsElement: null,
      // typing speed
      typeSpeed: 60,
      // time before typing starts
      startDelay: 600,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: "html"
    });
  
    ScrollReveal({ reset: true, distance: "60px" });
    ScrollReveal().reveal(".navigation");
    ScrollReveal().reveal(".center", { delay: 650, origin: "left" });
    ScrollReveal().reveal("#profile", { delay: 250, origin: "left" });
    ScrollReveal().reveal(".mouse_scroll", { delay: 1000, origin: "top" });
    ScrollReveal().reveal(".presArticle", { delay: 400, origin: "bottom" });
    ScrollReveal().reveal(".colaborate", { delay: 550, origin: "right" });
    ScrollReveal().reveal("#imgPres", { delay: 350, origin: "left" });
    ScrollReveal().reveal("#competence", { delay: 350, origin: "top" });
    ScrollReveal().reveal("#project-title", { delay: 250, origin: "bottom" });
    ScrollReveal().reveal(".projetList", { delay: 350, origin: "bottom" }); 
    ScrollReveal().reveal("#contact", { delay:250, origin: "top" });
    ScrollReveal().reveal(".footer", { delay: 350, origin: "bottom" });
  });
  
  jQuery(document).ready(function () {
    jQuery(".bar-color").css({
      background: "grey",
      width: "95%"
    });
    jQuery(".php").css({
      width: "80%"
    });
    jQuery(".js").css({
      width: "80%"
    });
    jQuery(".html").css({
      width: "80%"
    });
    jQuery(".css").css({
      width: "85%"
    });
    jQuery(".sql").css({
      width: "70%"
    });
    jQuery(".cpp").css({
      width: "70%"
    });
    jQuery(".c").css({
      width: "50%"
    });
    jQuery(".symfony").css({
      width: "70%"
    });
    jQuery(".jquery").css({
      width: "60%"
    });
    jQuery(".node").css({
      width: "60%"
    });
    jQuery(".twig").css({
      width: "70%"
    });
    jQuery(".pug").css({
      width: "55%"
    });
    
  });
  