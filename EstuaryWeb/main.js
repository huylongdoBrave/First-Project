
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

// Menu responsive
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// Feature search
function search() {
    const query = document.getElementById('search-input').value;
    alert('Bạn đã tìm kiếm: ' + query);
    // Thay thế alert bằng logic tìm kiếm thực tế của bạn
}

//  Enter event search
document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});


// let currentIndex = 0;

// function moveSlide(direction) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     currentIndex += direction;

//     // Kiểm tra biên
//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     }

//     // Di chuyển slider
//     const offset = -currentIndex * 100; // Tính toán độ dịch chuyển
//     slides.style.transform = `translateX(${offset}%)`;
// }