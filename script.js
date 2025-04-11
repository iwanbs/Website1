// typed animation
var typed = new Typed("#typed", {
    strings: ["Programmer", "Graphic Design", "Mobile Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    showCursor: false,
    loop: true
});

// Theme
function theme() {
    const darkbtn = document.getElementById('darkbtn');
    const lightbtn = document.getElementById('lightbtn');

    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        darkbtn.style.display = 'block';
        lightbtn.style.display = 'none';
    } else {
        darkbtn.style.display = 'none';
        lightbtn.style.display = 'block';
    }
}

// Navigaton Menu
const menuItems = document.querySelectorAll('.nav .item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});