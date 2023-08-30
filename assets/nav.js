function toggleNavbar() {
    var navLinks = document.getElementById('burger');

console.log("hello world");
   
if (navLinks.style.display == '' ||navLinks.style.display === 'none') {
navLinks.style.display = 'flex';
} else {
navLinks.style.display = 'none';
}

  
}

document.getElementById("burger-icon").addEventListener("click", toggleNavbar);