/**
 * Handles the copy functionality for the voucher code.
 * - Copies the voucher code to the clipboard when the copy button is clicked.
 * - Displays a notification that the code was copied.
 * - Ensures elements exist before adding event listeners.
 *
 * @event DOMContentLoaded - Ensures the script runs after the DOM is fully loaded.
 * @event click - Triggers the copy action and updates UI elements.
 */
document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.querySelector('.voucher__copying-icon');
  const voucherCode = document.querySelector('.voucher__bold-code');

  const showCodeDisplay = document.querySelector('.voucher__box-showing');
  const copiedNotification = document.querySelector('.voucher-copied');

  if (!copyButton || !voucherCode || !showCodeDisplay || !copiedNotification) {
    console.warn('Ein Element fehlt – Prüfe die Klassen in deinem HTML.');
    return;
  }

  copyButton.addEventListener('click', function () {
    navigator.clipboard
      .writeText(voucherCode.innerText)
      .then(() => {
        showCodeDisplay.classList.add('copied');
        copiedNotification.classList.add('copied');
      })
      .catch((err) => {
        console.error('Error copying to clipboard:', err);
        showCodeDisplay.classList.remove('copied');
        copiedNotification.classList.remove('copied');
      });
  });
});
