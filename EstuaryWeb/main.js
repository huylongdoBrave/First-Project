
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

<<<<<<< HEAD

// let currentIndex = 0;

// function moveSlide(direction) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     currentIndex += direction;

=======


// feature slider

let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    // Tính toán số nhóm 3 cột
    const totalSlides = Math.ceil(slides.length / 3);
    
    // Cập nhật currentIndex nếu vượt quá số nhóm
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Hiển thị các slide theo nhóm
    const offset = -currentIndex * (100 / totalSlides); // Tính toán offset
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    // Cập nhật trạng thái chấm
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function moveSlide(n) {
    currentIndex += n;
    showSlides();
}

function currentSlide(n) {
    currentIndex = n;
    showSlides();
}

// Khởi động carousel
showSlides();

// let currentIndex = 0;

// function moveSlide(direction) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     currentIndex += direction;

>>>>>>> 310a09a679d0aa6c5e3f250bd8e3b77fb05a4948
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