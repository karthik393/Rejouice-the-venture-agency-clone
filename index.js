// text animation

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// main cursor

let page1Content = document.querySelector(".hero-sec-2");
let cursor = document.querySelector(".cursor");

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(".cursor",{
        scale:0,
        opacity:0
    })
})

let page4Content = document.querySelector(".page-4");
let cursor2 = document.querySelector(".cursor-2");

page4Content.addEventListener("mousemove", function(dets){
    gsap.to(".cursor-2",{
      x: dets.x - cursor2.offsetWidth / 0.2,
      y: dets.y - cursor2.offsetHeight / 0.3
    })
})

page4Content.addEventListener("mouseenter", function(){
    gsap.to(".cursor-2",{
        scale:1,
        opacity:1
    })
})

page4Content.addEventListener("mouseleave", function(){
    gsap.to(".cursor-2",{
        scale:0,
        opacity:0
    })
})

// text animation main code

gsap.from(".second-para-h1" ,{
    y:120,
    stagger:0.25,
    duration:1,
    scrollTrigger:{
        trigger:".page-2",
        scroller:".main",
        start:"top 40%",
        end:"top 37%",
        scrub:2
    }
})

gsap.from(".second-para-h1-1" ,{
  y:120,
  stagger:0.25,
  duration:1,
  scrollTrigger:{
      trigger:".page-2",
      scroller:".main",
      start:"top 40%",
      end:"top 37%",
      scrub:2
  }
})

gsap.from(".second-para-h1-2" ,{
  y:120,
  stagger:0.25,
  duration:1,
  scrollTrigger:{
      trigger:".page-2",
      scroller:".main",
      start:"top 40%",
      end:"top 37%",
      scrub:2
  }
})

gsap.from(".second-para-h1-3" ,{
  y:120,
  stagger:0.25,
  duration:1,
  scrollTrigger:{
      trigger:".page-2",
      scroller:".main",
      start:"top 40%",
      end:"top 37%",
      scrub:2
  }
})

// first para lines code

gsap.from(".one-line" ,{
  y:120,
  stagger:0.25,
  duration:1,
  scrollTrigger:{
      trigger:".page-2",
      scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".second-line" ,{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
      trigger:".page-2",
      scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".three-line" ,{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
      trigger:".page-2",
      scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".content-h1" ,{
  y:120,
  stagger:0.5,
  duration:0.5,
  scrollTrigger:{
      trigger:".page-4",
      scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".page-4-heading" ,{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
      trigger:".page-4",
      scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".page-4-3o-heading" ,{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
    trigger:".page-4-3o",
    scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".content-3o-h1" ,{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
    trigger:".page-4-3o",
    scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

gsap.from(".content-3o-1-h1" ,{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
    trigger:".page-4-3o",
    scroller:".main",
      start:"top 70%",
      end:"top 67%",
      scrub:1
  }
})

// pop up navbar

const menuButton = document.querySelector(".navbar > h4");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
    gsap.to(menu, {
        y: 0,
    });
});

const close = document.querySelector(".close-button");

close.addEventListener("click", function(){
    gsap.to(menu, {
    y: 900,
   });
});

// swiping images

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: true,
    speed: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

// loader js
var tl = gsap.timeline()

tl.from("#loader h3",{
   x:40,
   opacity:0,
   duratio:1,
   stagger:0.1
});

tl.to("#loader h3",{
  opacity:0,
  x:-10,
  duratio:1,
  stagger:0.1
});

tl.to("#loader",{
  opacity:0,
});

tl.to("#loader",{
  display:"none",
});

// elevating text
tl.from(".hero-sec-2 h1",{
  y:100,
  opacity:0,
  stagger:0.1,
  delay:-1,
});

