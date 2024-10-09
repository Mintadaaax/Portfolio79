
const assignmentButtons = document.querySelectorAll('.assignment-buttons .btn');
assignmentButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.style.backgroundColor = '#ffa07a'; // เปลี่ยนสีเมื่อ hover
    });
    button.addEventListener('mouseleave', function() {
        button.style.backgroundColor = '#ff6b6b'; // กลับมาสีเดิมเมื่อออกจาก hover
    });
});

// ฟังก์ชันเพื่อสลับรูปภาพของฮีโร่ในหน้าแรก
const heroImage = document.querySelector('.hero-image img');
const imageSources = ['pic/port.jpg', 'pic/port2.jpg', 'pic/port3.jpg']; // รูปภาพที่ต้องการสลับ
let currentImageIndex = 0;

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    heroImage.src = imageSources[currentImageIndex];
}

// สลับรูปภาพทุกๆ 5 วินาที
setInterval(changeHeroImage, 5000);

// ฟังก์ชันเพื่อเลื่อนลงไปยังส่วนต่างๆ ของหน้าเว็บ
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const projectButton = document.querySelector('.top-right');
projectButton.addEventListener('mouseenter', function() {
    projectButton.style.backgroundColor = '#45a049'; // เปลี่ยนสีเมื่อ hover
});
projectButton.addEventListener('mouseleave', function() {
    projectButton.style.backgroundColor = '#4CAF50'; // กลับมาสีเดิมเมื่อออกจาก hover
});




