const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Sending...';
  window.lucide && window.lucide.createIcons();

  contactStatus.textContent = "Sending your message...";

  setTimeout(() => {
    submitBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Sent!';
    window.lucide && window.lucide.createIcons();
    contactStatus.textContent = "Thanks! We'll be in touch soon.";
    showToast("Message sent successfully.");

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      window.lucide && window.lucide.createIcons();
      contactForm.reset();
      contactStatus.textContent = "";
    }, 2000);
  }, 1000);
});
