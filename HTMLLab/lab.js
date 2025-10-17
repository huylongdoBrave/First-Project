// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// let currentIndex = 0;

// function showSlides() {
//     const slides = document.querySelectorAll('.carousel-slide');
//     const dots = document.querySelectorAll('.dot');

//     // Tính toán số nhóm 3 cột
//     const totalSlides = Math.ceil(slides.length / 3);
    
//     // Cập nhật currentIndex nếu vượt quá số nhóm
//     if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     } else if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     }

//     // Hiển thị các slide theo nhóm
//     const offset = -currentIndex * (100 / totalSlides); // Tính toán offset
//     document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

//     // Cập nhật trạng thái chấm
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// function moveSlide(n) {
//     currentIndex += n;
//     showSlides();
// }

// function currentSlide(n) {
//     currentIndex = n;
//     showSlides();
// }

// // Khởi động carousel
// showSlides();

// const menuOptions = document.querySelectorAll('.menu-option');
// const sections = document.querySelectorAll('.content');

// window.addEventListener('scroll', () => {
//     let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             const target = section.getAttribute('id');
//             menuOptions.forEach(option => {
//                 option.classList.remove('active');
//                 if (option.getAttribute('data-target') === target) {
//                     option.classList.add('active');
//                 }
//             });
//         }
//     });
// });


// const menuOptions = document.querySelectorAll('.menu-option');
// const sections = document.querySelectorAll('.content');

// menuOptions.forEach(option => {
//     option.addEventListener('click', () => {
//         // Xóa lớp active từ tất cả các option
//         menuOptions.forEach(opt => opt.classList.remove('active'));
//         // Thêm lớp active cho option được nhấp
//         option.classList.add('active');

//         // Cuộn đến phần nội dung tương ứng
//         const targetId = option.getAttribute('data-target');
//         const targetSection = document.getElementById(targetId);
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });



// let currentIndex = 0;

// function showSlides() {
//     const slides = document.querySelectorAll('.carousel-slide');
//     const dots = document.querySelectorAll('.dot');

//     // Tính toán số nhóm 3 cột
//     const totalSlides = Math.ceil(slides.length / 3);
    
//     // Cập nhật currentIndex nếu vượt quá số nhóm
//     if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     } else if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     }

//     // Hiển thị các slide theo nhóm
//     const offset = -currentIndex * (100 / totalSlides); // Tính toán offset
//     document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

//     // Cập nhật trạng thái chấm
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// function moveSlide(n) {
//     currentIndex += n;
//     showSlides();
// }

// function currentSlide(n) {
//     currentIndex = n;
//     showSlides();
// }

// ...existing code...

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const contactUI = document.getElementById('contact-ui');
    const contactPopup = document.getElementById('contact-popup');
    const closeContactPopup = document.getElementById('closeContactPopup');
    const contactCircle = document.querySelector('.contact-circle');
    const arrowUp = document.querySelector('.arrow-up');
    
    // Hiệu ứng xoay mũi tên khi scroll
    if (arrowUp) {
        window.addEventListener('scroll', function() {
            // Tính toán phần trăm đã cuộn của trang
            const percent = Math.min(1, window.scrollY / (document.body.scrollHeight - window.innerHeight));
            // Cập nhật biến CSS '--rotate' để xoay mũi tên
            arrowUp.style.setProperty('--rotate', `${percent * 360}deg`);
        });
    }

    // Hiện popup khi click
    if (contactUI && contactPopup) {
        contactUI.addEventListener('click', function() {
            contactPopup.classList.remove('hidden');
        });
    }

    // Đóng popup khi click dấu X
    if (closeContactPopup && contactPopup) {
        closeContactPopup.addEventListener('click', function() {
            contactPopup.classList.add('hidden');
        });
    }
});

// ...existing code...

// Get the button
let mybutton = document.getElementById("menuscroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}