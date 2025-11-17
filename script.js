

//ENDED HERE


document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

let tabs = document.querySelectorAll("ul a");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // 1️⃣ Remove highlight + active from all
    
    tabs.forEach(t => t.classList.remove("highlight"));
   

    // 2️⃣ Add to clicked one

    tab.classList.add("highlight");
  });
});


/*INTRO*/


const text = "Hi ! I am Arpita Frontend Developer✨";
let i = 0;
function typeWriter(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();


/*FOR THE GET IN TOUCH BTN*/

function scrollToContact() {
    window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: "smooth"
    });
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
/*START*/

const sideNav = document.getElementById("sideNav");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    sideNav.classList.toggle("menu-open");

    // Toggle between ☰ and ✖
    if (sideNav.classList.contains("menu-open")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});
