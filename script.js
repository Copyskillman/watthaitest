let index = 0;
let autoplay = false;
let interval;
let itemsPerView = 3; // ค่าเริ่มต้น แสดง 3 คอลัมน์

function showSlides() {
  const items = document.querySelectorAll("#watthai.wat");
  items.forEach((item, i) => {
    item.style.display =
      i >= index && i < index + itemsPerView ? "block" : "none";
  });
}

function nextSlide() {
  const items = document.querySelectorAll("#watthai.wat");
  index = (index + 1) % items.length;
  showSlides();
}

function prevSlide() {
  const items = document.querySelectorAll("#watthai.wat");
  index = (index - 1 + items.length) % items.length;
  showSlides();
}

function toggleAutoplay() {
  autoplay = !autoplay;
  if (autoplay) {
    interval = setInterval(nextSlide, 2000);
  } else {
    clearInterval(interval);
  }
}

// ฟังก์ชันเปลี่ยนจำนวนคอลัมน์
function setColumns(n) {
  itemsPerView = n;
  index = 0; // reset index ให้เริ่มจากหน้าแรก
  showSlides();
}

showSlides();
