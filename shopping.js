// Cart sidebar toggle
const cartBtn = document.querySelector(".cart-btn");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCart = document.querySelector(".close-cart");
const cartOverlay = document.querySelector(".cart-overlay");

cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  cartOverlay.style.display = "block";
});
closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.style.display = "none";
});

// Simple notification
function showNotification() {
  const notification = document.querySelector(".cart-notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}
// Navigation links functionality
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const sectionId = link.getAttribute("data-section");
  
      // Hide all sections
      document.querySelectorAll(".page-section").forEach(sec => {
        sec.classList.add("hidden");
      });
  
      // Show selected section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      }
    });
  });
// Smooth scroll to top
const scrollToTopBtn = document.querySelector(".scroll-to-top");  