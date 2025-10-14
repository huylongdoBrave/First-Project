
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


// // Feature change flag
// const flagImage = document.getElementById('flag');

// const ukFlag = './static/img/ukflag.png'; 
// const vnFlag = './static/img/vnflag.png'; 

// // Thêm sự kiện click cho hình ảnh
// flagImage.addEventListener('click', function() {
//     // Kiểm tra hình ảnh hiện tại và đổi hình
//     if (flagImage.src.includes(ukFlag)) {
//         flagImage.src = vnFlag; // Đổi sang cờ Việt Nam
//     } else {
//         flagImage.src = ukFlag; // Đổi lại sang cờ Anh
//     }
// });


// Lấy phần tử hình ảnh
const flagImage = document.getElementById('flag');
const vnFlagImage = document.getElementById('vn-flag');

// Đặt đường dẫn cho các hình ảnh cờ
const ukFlag = './static/img/ukflag.png'; // Đường dẫn đến hình cờ nước Anh
const vnFlag = './static/img/vnflag.png'; // Đường dẫn đến hình cờ Việt Nam

// Thêm sự kiện mouseover cho hình ảnh cờ Anh
flagImage.addEventListener('mouseover', function() {
    vnFlagImage.style.display = 'block'; // Hiện cờ Việt Nam khi rê chuột vào cờ Anh
});

// Thêm sự kiện mouseout cho hình ảnh cờ Anh
flagImage.addEventListener('mouseout', function() {
    vnFlagImage.style.display = 'none'; // Ẩn cờ Việt Nam khi không còn rê chuột
});

// Thêm sự kiện click cho cờ Việt Nam
vnFlagImage.addEventListener('click', function() {
    flagImage.src = vnFlag; // Đổi sang cờ Việt Nam
});