// Efeito de "digitação" no topo, estilo terminal
const terminalEl = document.getElementById('terminal');
const line = 'estudante@cc:~$ whoami';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (terminalEl) {
  if (prefersReducedMotion) {
    terminalEl.textContent = line;
  } else {
    let i = 0;
    (function type() {
      terminalEl.textContent = line.slice(0, i);
      i++;
      if (i <= line.length) {
        setTimeout(type, 45);
      }
    })();
  }
}

// Ano no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Relógio simples na status bar
const clockEl = document.getElementById('clock');
function updateClock() {
  if (!clockEl) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  clockEl.textContent = `${hh}:${mm}`;
}
updateClock();
setInterval(updateClock, 1000 * 30);
