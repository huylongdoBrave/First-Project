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

// // Khởi động carousel
// showSlides();

document.addEventListener('DOMContentLoaded', function() {
    const currentFlag = document.getElementById('currentFlag');
    const dropdownContent = document.getElementById('dropdownContent');
    const vnFlag = document.getElementById('vnFlag');

    // Thiết lập biến để theo dõi trạng thái cờ hiện tại
    let isUKFlag = true; // Bắt đầu với cờ UK

    // Sự kiện khi nhấn vào cờ hiện tại
    currentFlag.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block'; // Chuyển đổi hiển thị dropdown
    });

    // Sự kiện khi nhấn vào cờ Việt Nam
    vnFlag.addEventListener('click', function() {
        currentFlag.src = isUKFlag ? vnFlag.src : 'uk-flag.png'; // Đổi cờ hiện tại
        isUKFlag = !isUKFlag; // Chuyển đổi trạng thái cờ
        dropdownContent.style.display = 'none'; // Ẩn dropdown sau khi chọn
    });

    // Ẩn dropdown khi nhấn ra ngoài
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.flag-dropdown')) {
            dropdownContent.style.display = 'none'; // Ẩn dropdown khi nhấn ra ngoài
        }
    });
});