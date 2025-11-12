function loadProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const productsHTML = Object.entries(PRODUCTS)
    .map(
      ([slug, data]) => `
    <article class="group rounded-[24px] bg-white border border-[#E4E4E4] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition ring-0 hover:ring-1 hover:ring-[#00BEEA]/40">
      <a href="product.html?id=${slug}" class="block">
        <div class="relative aspect-[4/3] overflow-hidden rounded-t-[24px]">
          <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" width="800" height="600">
          <span class="absolute top-3 left-3 text-[12px] bg-white/80 backdrop-blur rounded-full px-3 py-1 border border-[#E4E4E4]">${data.tag}</span>
        </div>
      </a>
      <div class="p-5">
        <h3 class="font-[600] tracking-[0.03em] uppercase">${data.title}</h3>
        <p class="mt-2 text-[#4C4C4C] leading-[1.7]">${data.short}</p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-[15px] font-[500]">${data.price}</span>
          <button data-notify="${data.title}" class="inline-flex items-center gap-2 rounded-full border border-[#EAE6DE] px-4 py-2 text-[13px] hover:border-[#00BEEA] hover:text-[#00BEEA] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]">
            <i data-lucide="bell" class="w-4 h-4"></i>
            Out of Stock – Notify Me
          </button>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  grid.innerHTML = productsHTML;
  window.lucide && window.lucide.createIcons();
  bindNotifyButtons();
}

document.getElementById("bannerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Thanks! You're on the list.");
  setTimeout(() => e.target.reset(), 1000);
});

window.addEventListener("load", () => {
  loadProducts();
});

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");
const figures = carousel.querySelectorAll("figure");

let currentIndex = 0;

// Create dots
figures.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "w-2 h-2 rounded-full transition-all";
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  dot.addEventListener("click", () => scrollToIndex(index));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.className = "w-6 h-2 rounded-full bg-gray-800 transition-all";
    } else {
      dot.className = "w-2 h-2 rounded-full bg-gray-300 transition-all";
    }
  });
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === figures.length - 1;
}

function scrollToIndex(index) {
  currentIndex = index;
  const figure = figures[index];
  carousel.scrollTo({
    left: figure.offsetLeft - 24,
    behavior: "smooth",
  });
  updateDots();
  updateButtons();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    scrollToIndex(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < figures.length - 1) {
    scrollToIndex(currentIndex + 1);
  }
});

// Update current index on scroll
carousel.addEventListener("scroll", () => {
  const scrollLeft = carousel.scrollLeft;
  const newIndex = Math.round(scrollLeft / (figures[0].offsetWidth + 24));
  if (newIndex !== currentIndex && newIndex >= 0 && newIndex < figures.length) {
    currentIndex = newIndex;
    updateDots();
    updateButtons();
  }
});

// Initialize
updateDots();
updateButtons();
