const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,

});
}
swiperAnimation()

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var flag = 0
menu.addEventListener("click",function(){
 if(flag == 0){

  full.style.top = 0
  flag = 1

 }else{
   full.style.top = "-100%"
   flag = 0
 }
}
)
document.querySelectorAll('#full-div1 a, nav a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      scroll.scrollTo(target);
    }

    // remove hash so refresh won't scroll there
    history.replaceState(null, null, window.location.pathname);

    full.style.top = "-100%";
    flag = 0;
  });
});


const cursor = document.querySelector("#cursor-circle");
const swiper = document.querySelector(".swiper");

swiper.addEventListener("mouseenter", () => {
    swiper.style.cursor = "none";   // hide normal cursor ONLY inside swiper

    cursor.style.opacity = "1";
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
});

swiper.addEventListener("mouseleave", () => {
    swiper.style.cursor = "default";  // restore normal cursor

    cursor.style.opacity = "0";
    cursor.style.transform = "translate(-50%, -50%) scale(0.3)";
});

swiper.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

