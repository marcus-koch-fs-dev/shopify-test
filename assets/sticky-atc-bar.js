/**
 * Handles the visibility of the sticky ATC bar based on the scroll position.
 * @event scroll - Fires on scroll to check the button's visibility.
 */
document.addEventListener('DOMContentLoaded', function () {
  const atcBar = document.querySelector('.sticky-atc-bar');
  const triggerElement = document.querySelector('.cart-action');

  if (!atcBar || !triggerElement) return;

  function toggleATCBar() {
    const triggerBottom = triggerElement.getBoundingClientRect().bottom;

    if (triggerBottom < 0) {
      atcBar.classList.add('active');
    } else {
      atcBar.classList.remove('active');
    }
  }

  window.addEventListener('scroll', toggleATCBar);
});
