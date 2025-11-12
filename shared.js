const PRODUCTS = {
  "herbal-snowcaps": {
    title: "Herbal Snowcaps",
    price: "$22.00",
    short:
      "A refreshing blend of white tea, chamomile, and holy basil, designed for moments of focus and calm.",
    long: " Find your calm wherever life takes you with our Botanic Mist Aromatherapy Diffuser. This elegant pen releases a soft botanical vapor, no nicotine, no additives, just soothing aroma from pure essential oils. The blend of lavender, chamomile, and bergamot transforms each breath into a moment of rest and renewal. Ideal for travel, work, or quiet evenings in.",
    size: "Net wt. 60g • Caffeine-free herbal blend",
    image: "/assets/herbal-snowcaps.webp",
    icon: "cup-soda",
    tag: "Botanical Clarity Capsules",
  },
  "citrus-calm-chews": {
    title: "Citrus Calm Chews",
    price: "$18.00",
    short:
      "Bright citrus-infused chews with lemon balm and vitamin C for balance and uplift.",
    long: "Our Citrus Calm Chews capture sunshine in every bite. Blended with lemon balm, passionflower, and a touch of vitamin C, these botanical gummies are a simple ritual to refresh the senses and restore balance throughout your day. Naturally flavored with orange and tangerine, they’re a sweet reminder to slow down, breathe deeply, and reset.",
    size: "Pack of ~24 chews • Naturally flavored",
    image: "/assets/citrus-calm-chews.webp",
    icon: "candy",
    tag: "Vitamin Botanical Gummies",
  },
  "botanic-mist ": {
    title: "Botanic Mist",
    price: "$16.00",
    short:
      "Portable aromatherapy device with lavender and bergamot for on-the-go calm.",
    long: " Find your calm wherever life takes you with our Botanic Mist Aromatherapy Diffuser. This elegant pen releases a soft botanical vapor — no nicotine, no additives just soothing aroma from pure essential oils.",
    size: "Rechargeable via USB • Contains pure essential oils only",
    image: "/assets/botanic-mist.webp",
    icon: "wind",
    tag: "Aromatherapy Diffuser Pen",
  },
};

function loadHeader() {
  const container = document.getElementById("header-container");
  if (!container) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  container.innerHTML = `
    <header id="siteHeader" class="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div class="mx-auto max-w-7xl px-6">
        <div class="flex items-center justify-between py-4 rounded-full mt-3 backdrop-blur-md bg-white/60 border border-[#E4E4E4] shadow-sm">
          <a href="index.html" class="pl-4 pr-3 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA] rounded-full">
            <div class="flex items-end">
              <span class="text-[14px] tracking-[0.18em] font-[600]">SNOWLEAF</span>
              <span class="ml-2 text-[12px] tracking-[0.22em] text-[#4C4C4C] font-[500]">BOTANICALS</span>
            </div>
          </a>

          <nav aria-label="Primary" class="hidden md:flex items-center gap-8 font-[500]">
            <a href="index.html" class="relative py-2 text-sm tracking-[0.03em] uppercase text-[#1F1F1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA] rounded ${
              currentPage === "index.html" ? "text-[#00BEEA]" : ""
            }">
              Home
            </a>
            <a href="shop.html" class="relative py-2 text-sm tracking-[0.03em] uppercase text-[#1F1F1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA] rounded ${
              currentPage === "shop.html" ? "text-[#00BEEA]" : ""
            }">
              Shop
            </a>
            <a href="about.html" class="relative py-2 text-sm tracking-[0.03em] uppercase text-[#1F1F1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA] rounded ${
              currentPage === "about.html" ? "text-[#00BEEA]" : ""
            }">
              About
            </a>
            <a href="contact.html" class="relative py-2 text-sm tracking-[0.03em] uppercase text-[#1F1F1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA] rounded ${
              currentPage === "contact.html" ? "text-[#00BEEA]" : ""
            }">
              Contact
            </a>
          </nav>

          <div class="flex items-center gap-2 pr-4">
            <button id="openWaitlist" class="flex items-center gap-2 rounded-full border border-[#E4E4E4] bg-white/70 px-4 py-2 text-sm text-[#1F1F1F] hover:border-[#00BEEA] hover:text-[#00BEEA] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]" aria-label="Join Waitlist">
              <i data-lucide="bell" class="w-4 h-4"></i>
              <span class="hidden sm:inline">Join Waitlist</span>
            </button>
            <button class="relative rounded-full p-2 hover:bg-[#EAE6DE]/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]" aria-label="View Cart">
              <i data-lucide="shopping-cart" class="w-5 h-5"></i>
              <span class="absolute -top-1 -right-1 w-4 h-4 bg-[#00BEEA] text-white text-[10px] rounded-full grid place-items-center">0</span>
            </button>
            <button id="mobileMenuBtn" class="md:hidden rounded-full p-2 hover:bg-[#EAE6DE]/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]" aria-label="Toggle menu">
              <i data-lucide="menu" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <div id="mobileMenu" class="md:hidden hidden mt-3 bg-white/80 backdrop-blur-md border border-[#E4E4E4] rounded-2xl shadow-sm overflow-hidden">
          <a href="index.html" class="block px-5 py-3 text-sm tracking-[0.03em] uppercase border-b border-[#E4E4E4]">Home</a>
          <a href="shop.html" class="block px-5 py-3 text-sm tracking-[0.03em] uppercase border-b border-[#E4E4E4]">Shop</a>
          <a href="about.html" class="block px-5 py-3 text-sm tracking-[0.03em] uppercase border-b border-[#E4E4E4]">About</a>
          <a href="contact.html" class="block px-5 py-3 text-sm tracking-[0.03em] uppercase">Contact</a>
        </div>
      </div>
    </header>
  `;

  document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
    document.getElementById("mobileMenu")?.classList.toggle("hidden");
  });

  document
    .getElementById("openWaitlist")
    ?.addEventListener("click", () => openModal());

  window.lucide && window.lucide.createIcons();
}

function loadFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;

  container.innerHTML = `
    <footer class="mt-10 border-t border-[#E4E4E4] bg-white">
      <div class="mx-auto max-w-7xl px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-end">
              <span class="text-[14px] tracking-[0.18em] text-sky-500 font-[600]">SERAVITA</span>
              <span class="ml-2 text-[12px] tracking-[0.22em] text-[#4C4C4C] font-[500]">BOTANICALS</span>
            </div>
            <p class="mt-3 text-sm text-[#4C4C4C]">Handcrafted herbal blends and botanical goods made in small batches for calm and clarity.</p>
          </div>
          <div ">
            <h4 class="text-sm font-[600] tracking-[0.12em] uppercase">Shop</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li><a href="shop.html" class="text-[#1F1F1F] hover:text-[#00BEEA]">All Products</a></li>
              <li><a href="product.html?id=herbal-snowcaps" class="text-[#1F1F1F] hover:text-[#00BEEA]">Herbal Snowcaps</a></li>
              <li><a href="product.html?id=citrus-calm-chews" class="text-[#1F1F1F] hover:text-[#00BEEA]">Citrus Calm Chews</a></li>
              <li><a href="product.html?id=botanic-mist" class="text-[#1F1F1F] hover:text-[#00BEEA]">Botanic Mist</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-[600] tracking-[0.12em] uppercase">Company</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li><a href="about.html" class="text-[#1F1F1F] hover:text-[#00BEEA]">About</a></li>
              <li><a href="contact.html" class="text-[#1F1F1F] hover:text-[#00BEEA]">Contact</a></li>
              <li><button id="openWaitlistFooter" class="text-left text-[#1F1F1F] hover:text-[#00BEEA]">Join Waitlist</button></li>
            </ul>
          </div>
             <div>
            <h4 class="text-sm font-[600] tracking-[0.12em] uppercase">Policies</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li><a href="privacy-policy.html" class="text-[#1F1F1F] hover:text-[#00BEEA]">Privacy Policy</a></li>
              <li><a href="terms.html" class="text-[#1F1F1F] hover:text-[#00BEEA]">Term of Service</a></li>
             <li><a href="refund.html" class="text-[#1F1F1F] hover:text-[#00BEEA]">Refund Policy</a></li>
            </ul>
          </div>
     
        </div>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-[#4C4C4C]">© ${new Date().getFullYear()} Seravita Botanicals. All Rights Reserve.</p>
          <a href="index.html" class="inline-flex items-center gap-2 text-sm rounded-full border border-[#E4E4E4] px-4 py-2 hover:border-[#00BEEA] hover:text-[#00BEEA] transition">
            <i data-lucide="arrow-up" class="w-4 h-4"></i>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  `;

  document
    .getElementById("openWaitlistFooter")
    ?.addEventListener("click", () => openModal());
  window.lucide && window.lucide.createIcons();
}

function loadModal() {
  const container = document.getElementById("modal-container");
  if (!container) return;

  container.innerHTML = `
    <div id="waitlistModal" class="fixed inset-0 z-[60] hidden" role="dialog" aria-modal="true" aria-labelledby="waitlistTitle">
      <div id="waitlistOverlay" class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div class="relative mx-auto mt-24 max-w-lg px-6">
        <div class="rounded-2xl bg-white border border-[#E4E4E4] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden">
          <div class="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E4]">
            <h3 id="waitlistTitle" class="text-lg font-[600] tracking-tight">Join the Waitlist</h3>
            <button id="closeWaitlist" class="rounded-full p-2 hover:bg-[#EAE6DE]/60 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]" aria-label="Close waitlist modal">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
          <form id="waitlistForm" class="px-6 py-5 space-y-4">
            <div class="text-sm text-[#4C4C4C]">
              <span>We'll email you when it's back in stock.</span>
              <div id="wlProductWrap" class="mt-1 hidden">
                <span class="inline-flex items-center gap-2 rounded-full border border-[#E4E4E4] px-3 py-1">
                  <i data-lucide="tag" class="w-4 h-4 text-[#00BEEA]"></i>
                  <span id="wlProduct" class="text-[#1F1F1F]"></span>
                </span>
              </div>
            </div>
            <div>
              <label for="wlname" class="text-sm text-[#4C4C4C]">Name (optional)</label>
              <input id="wlname" type="text" class="mt-1 w-full rounded-xl border border-[#E4E4E4] bg-white px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]">
            </div>
            <div>
              <label for="wlemail" class="text-sm text-[#4C4C4C]">Email</label>
              <input id="wlemail" type="email" required placeholder="you@example.com" class="mt-1 w-full rounded-xl border border-[#E4E4E4] bg-white px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]">
            </div>
            <div class="flex items-start gap-3">
              <input id="wlconsent" type="checkbox" required class="mt-1 h-4 w-4 rounded border-[#E4E4E4] text-[#00BEEA] focus:ring-[#00BEEA]">
              <label for="wlconsent" class="text-sm text-[#4C4C4C]">I agree to receive waitlist updates for this product.</label>
            </div>
            <div class="flex items-center gap-3 pt-2">
              <button type="submit" class="inline-flex items-center gap-2 rounded-full bg-[#00BEEA] text-white px-6 py-3 text-[15px] font-[500] hover:bg-[#00B0DA] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEA]">
                <i data-lucide="bell-ring" class="w-5 h-5"></i>
                Notify Me
              </button>
              <button type="button" id="wlCancel" class="text-sm text-[#1F1F1F] hover:text-[#00BEEA]">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById("waitlistModal");
  const overlay = document.getElementById("waitlistOverlay");
  const form = document.getElementById("waitlistForm");

  document
    .getElementById("closeWaitlist")
    ?.addEventListener("click", closeModal);
  document.getElementById("wlCancel")?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Added to waitlist. We'll email you when it's live.");
    setTimeout(() => {
      closeModal();
      form.reset();
    }, 1000);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });

  window.lucide && window.lucide.createIcons();
}

function openModal(productName) {
  const modal = document.getElementById("waitlistModal");
  const wlProductWrap = document.getElementById("wlProductWrap");
  const wlProduct = document.getElementById("wlProduct");

  if (productName) {
    wlProduct.textContent = productName;
    wlProductWrap.classList.remove("hidden");
  } else {
    wlProduct.textContent = "";
    wlProductWrap.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  setTimeout(() => document.getElementById("wlemail")?.focus(), 50);
  window.lucide && window.lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById("waitlistModal");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function showToast(message) {
  const region = document.getElementById("toastRegion");
  const t = document.createElement("div");
  t.className =
    "pointer-events-auto flex items-center gap-2 rounded-full bg-white border border-[#E4E4E4] shadow px-4 py-2 transition-all duration-300";
  t.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-[#00BEEA]"></i><span class="text-sm">${message}</span>`;
  region.appendChild(t);
  window.lucide && window.lucide.createIcons();
  setTimeout(() => {
    t.classList.add("opacity-0", "translate-y-1");
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

function bindNotifyButtons() {
  document.querySelectorAll("[data-notify]").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productName = btn.getAttribute("data-notify") || "";
      openModal(productName);
    });
  });
}

window.addEventListener("load", () => {
  loadHeader();
  loadFooter();
  loadModal();

  const siteHeader = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 8;
    siteHeader?.classList.toggle("shadow", scrolled);
  });

  window.lucide && window.lucide.createIcons();
});
