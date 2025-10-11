// $(document).ready(function(){
//     $('.your-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//     });
// });

    let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        currentIndex += direction;

        // Kiểm tra biên
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        // Di chuyển slider
        const offset = -currentIndex * 100; // Tính toán độ dịch chuyển
        slides.style.transform = `translateX(${offset}%)`;
    }