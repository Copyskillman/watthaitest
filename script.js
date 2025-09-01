let index = 0;
let autoplay = false;
let interval;
let currentColumns = 3;
let totalItems = 4;

function showSlides() {
  const items = document.querySelectorAll(".wat");
  const itemsToShow = Math.min(currentColumns, totalItems);

  items.forEach((item, i) => {
    if (i >= index && i < index + itemsToShow) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function nextSlide() {
  const maxIndex = Math.max(0, totalItems - currentColumns);
  index = index >= maxIndex ? 0 : index + 1;
  showSlides();
}

function prevSlide() {
  const maxIndex = Math.max(0, totalItems - currentColumns);
  index = index <= 0 ? maxIndex : index - 1;
  showSlides();
}

function toggleAutoplay() {
  autoplay = !autoplay;
  const button = document.querySelector('button[onclick="toggleAutoplay()"]');

  if (autoplay) {
    interval = setInterval(nextSlide, 2000);
    button.textContent = "Stop Autoplay";
    button.style.backgroundColor = "#d32f2f";
  } else {
    clearInterval(interval);
    button.textContent = "Start Autoplay";
    button.style.backgroundColor = "#444";
  }
}

function setColumns(n) {
  if (n < 2 || n > 4) return;

  currentColumns = n;
  index = 0;

  const container = document.getElementById("temple");
  const galleryGrid = document.querySelector(".gallery-grid");

  container.style.setProperty("--columns", n);

  if (n === 2) {
    galleryGrid.setAttribute("data-columns", "2");
  } else {
    galleryGrid.removeAttribute("data-columns");
  }

  showSlides();
  updateColumnButtons(n);
}

function updateColumnButtons(activeColumns) {
  const buttons = document.querySelectorAll(
    '.controls button[onclick*="setColumns"]'
  );
  buttons.forEach((button) => {
    const columns = parseInt(button.textContent.split(" ")[0]);
    if (columns === activeColumns) {
      button.style.backgroundColor = "#2196f3";
    } else {
      button.style.backgroundColor = "#444";
    }
  });
}

showSlides();
updateColumnButtons(3);
