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