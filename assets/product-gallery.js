document.addEventListener('DOMContentLoaded', () => {
  const vertListItems = document.querySelectorAll('.product-gallery__item-img');

  if (vertListItems.length > 0) {
    vertListItems.forEach((item, index) => {
      item.addEventListener('click', function () {
        alert(`Bild ${index + 1} geklickt`);
      });
    });
  } else {
    console.warn('Keine Bilder gefunden.');
  }
});
