/**
 * Handles the visibility of the sticky ATC bar based on the scroll position.
 *
 * - The sticky ATC bar is shown when the `.cart-action` button is **out of the viewport**.
 * - If the `.cart-action` is visible, the sticky ATC bar is hidden.
 *
 * @event scroll - Fires on scroll to check the button's visibility.
 */
document.addEventListener('DOMContentLoaded', function () {
  const atcBar = document.querySelector('.sticky-atc-bar');
  const triggerElement = document.querySelector('.cart-action');

  if (!atcBar || !triggerElement) return;

  /**
   * Checks if the `.cart-action` button is out of the viewport.
   * If true, activates the sticky ATC bar.
   */
  function toggleATCBar() {
    const triggerBottom = triggerElement.getBoundingClientRect().bottom;

    // Activate sticky bar if `.cart-action` is out of the viewport
    if (triggerBottom < 0) {
      atcBar.classList.add('active');
    } else {
      atcBar.classList.remove('active');
    }
  }

  // Listen for scroll event to trigger visibility check
  window.addEventListener('scroll', toggleATCBar);
});
