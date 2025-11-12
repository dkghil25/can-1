function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId || !PRODUCTS[productId]) {
    window.location.href = "shop.html";
    return;
  }

  const data = PRODUCTS[productId];

  document.getElementById("pd-breadcrumb").textContent = data.title;
  document.title = `${data.title} — Seravita Botanicals`;

  const img = document.getElementById("pd-image");
  img.src = data.image;
  img.alt = data.title;

  document.getElementById("pd-title").textContent = data.title;
  document.getElementById("pd-price").textContent = data.price;
  document.getElementById("pd-short").textContent = data.short;
  document.getElementById("pd-long").textContent = data.long;
  document.getElementById("pd-size").textContent = data.size;

  const icon = document.getElementById("pd-icon");
  icon.setAttribute("data-lucide", data.icon);

  const notifyBtn = document.getElementById("pd-notify");
  notifyBtn.setAttribute("data-notify", data.title);
  notifyBtn.addEventListener("click", () => openModal(data.title));

  window.lucide && window.lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("load", () => {
  loadProduct();
});
