/**
 * Toggles the visibility of the sticky ATC bar when the cart-action button scrolls out of view.
 * Uses IntersectionObserver for efficient detection and getBoundingClientRect() for precise positioning.
 */
document.addEventListener('DOMContentLoaded', function () {
  const atcBar = document.querySelector('.sticky-atc-bar');
  const triggerElement = document.querySelector('.cart-action');

  if (!atcBar || !triggerElement) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const rect = triggerElement.getBoundingClientRect();
          if (rect.bottom < 0) {
            atcBar.classList.add('active');
          }
        } else {
          atcBar.classList.remove('active');
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(triggerElement);
});
