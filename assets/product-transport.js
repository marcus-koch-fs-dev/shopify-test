const drawer = document.querySelector('.drawer');
const drawerText = document.querySelector('.drawer-text');
const closeBtn = document.querySelector('.drawer-close');

// Register event listener
document.querySelectorAll('.drawer__svg.icon-arrow').forEach((svg) => {
  svg.addEventListener('click', function () {
    const content = parseDrawerContent(this.dataset.content);

    drawerText.innerHTML = content || 'Keine Informationen verfügbar.';
    drawer.classList.add('open');
  });
});

closeBtn.addEventListener('click', function () {
  drawer.classList.remove('open');
});

/**
 * Parses a structured text format into an HTML structure.
 *
 * Supported Markers:
 * - `;;HEAD` → `<h4>`
 * - `;;PARA` → `<p>`
 * - `;;TEXT` → `<span>`
 * - `;;LIST-START` → `<ul>`
 * - `;;LI` → `<li>` (List Item)
 * - `;;LIST-END` → `</ul>`
 *
 * Rules:
 * - `;;LIST-START` starts an unordered list (`<ul>`).
 * - `;;LI` adds a list item (`<li>`).
 * - If `;;LIST-START` is missing, it will be auto-created when `;;LI` appears.
 * - If `;;LIST-END` is missing, it will be auto-closed.
 * - Any text without a recognized marker is wrapped in `<p>`.
 * - Case-insensitive markers (e.g., `;;head`, `;;HEAD`, `;;Head` all work).
 *
 * @param {string} rawText - The structured text input to be parsed.
 * @returns {string} - The generated HTML string.
 */
function parseDrawerContent(rawText) {
  const lines = rawText
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line); // Entferne leere Zeilen
  let htmlOutput = '';
  let inList = false; // Status, ob eine Liste geöffnet ist

  lines.forEach((line) => {
    let parts = line.split(';;');
    let content = parts[0].trim();
    let type = parts[1] ? parts[1].trim().toUpperCase() : ''; // Immer Uppercase für Vergleich

    switch (type) {
      case 'HEAD':
        htmlOutput += `<h4>${content}</h4>\n`;
        break;
      case 'TEXT':
        htmlOutput += `<span>${content}</span>\n`;
        break;
      case 'PARA':
        htmlOutput += `<p>${content}</p>\n`;
        break;
      case 'LIST-START':
        if (!inList) {
          htmlOutput += `<ul>\n`;
          inList = true;
        }
        break;
      case 'LI':
        if (!inList) {
          htmlOutput += `<ul>\n`; // Falls `LIST-START` vergessen wurde
          inList = true;
        }
        htmlOutput += `<li>${content}</li>\n`;
        break;
      case 'LIST-END':
        if (inList) {
          htmlOutput += `</ul>\n`;
          inList = false;
        }
        break;
      default:
        if (content !== '') {
          htmlOutput += `<p>${content}</p>\n`; // Falls kein Marker erkannt wurde
        }
        break;
    }
  });

  // Falls `LIST-END` vergessen wurde, schließen wir die Liste trotzdem
  if (inList) {
    htmlOutput += `</ul>\n`;
  }

  return htmlOutput;
}
