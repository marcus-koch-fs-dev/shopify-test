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
        console.error('Fehler beim Kopieren:', err);
      });
  });
});
