const drawer = document.querySelector('.drawer');
const drawerText = document.querySelector('.drawer-text');
const closeBtn = document.querySelector('.drawer-close');

// Register event listener
document.querySelectorAll('.drawer__svg.icon-arrow').forEach((svg) => {
  svg.addEventListener('click', function () {
    const content = this.dataset.content;

    drawerText.innerHTML = content || 'Keine Informationen verfügbar.';
    drawer.classList.add('open');
  });
});

closeBtn.addEventListener('click', function () {
  drawer.classList.remove('open');
});
