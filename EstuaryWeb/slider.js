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