
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


// Event cờ
document.addEventListener('DOMContentLoaded', function() {
    const currentFlag = document.getElementById('currentFlag');
    const dropdownContent = document.getElementById('dropdownContent');
    const vnFlag = document.getElementById('vnFlag');

    // Thiết lập biến để theo dõi trạng thái cờ hiện tại
    let isUKFlag = true; 

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

// Change hover menu
/* const menuOptions = document.querySelectorAll('.menu-option');
const sections = document.querySelectorAll('.menu-title-item');

menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Xóa lớp active từ tất cả các option
        menuOptions.forEach(opt => opt.classList.remove('active'));
        // Thêm lớp active cho option được nhấp
        option.classList.add('active');
        // Cuộn đến phần nội dung tương ứng
        const targetId = option.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
}); */

document.addEventListener('scroll', function() {
    const sections = [
        { id: 'option1', menuIndex: 0 },
        { id: 'option2', menuIndex: 1 },
        { id: 'option3', menuIndex: 2 }
    ];
    const menuLinks = document.querySelectorAll('.menu a');
    let current = 0;

    sections.forEach((section, idx) => {
        const el = document.getElementById(section.id);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom > 80) {
                current = idx;
            }
        }
    });

    menuLinks.forEach((link, idx) => {
        if (idx === current) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});