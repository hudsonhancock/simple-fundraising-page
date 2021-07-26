

const countdown = () => {
    const countDate = new Date('October 17, 2021 10:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // console.log(gap);

    //How the time works?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // console.log(day);

    //Calculate
    const textDay = Math.floor(gap / day);
    // console.log(textDay);
    const textHour = Math.floor((gap % day) / hour);
    // console.log(textHour);
    const textMinute = Math.floor((gap % hour) / minute);
    // console.log(textMinute);
    const textSecond = Math.floor((gap % minute) / second);
    // console.log(textSecond);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
