document.addEventListener('DOMContentLoaded', function () {
  // find likely TOC containers
  const tocSelectors = ['.md-nav__toc', '.md-content__toc', '.toc', '#TableOfContents'];
  let tocEl = null;
  for (const s of tocSelectors) {
    const el = document.querySelector(s);
    if (el) { tocEl = el; break; }
  }
  if (!tocEl) return; // no TOC on this page

  const storageKey = 'mp-toc-collapsed';
  const collapsed = localStorage.getItem(storageKey) === '1';

  // apply initial state
  if (collapsed) tocEl.classList.add('collapsed');

  // create toggle button
  const btn = document.createElement('button');
  btn.className = 'mp-toc-collapse-toggle';
  btn.type = 'button';
  btn.title = 'Toggle table of contents';
  const updateLabel = () => { btn.textContent = tocEl.classList.contains('collapsed') ? '打开目录' : '折叠目录'; };
  updateLabel();

  btn.addEventListener('click', function () {
    const isCollapsed = tocEl.classList.toggle('collapsed');
    localStorage.setItem(storageKey, isCollapsed ? '1' : '0');
    updateLabel();
  });

  // insert button into DOM — place near top-left but avoid header overlap
  document.body.appendChild(btn);

  // Optional: collapse TOC on small screens by default if not set
  if (window.innerWidth <= 960 && localStorage.getItem(storageKey) === null) {
    tocEl.classList.add('collapsed');
    localStorage.setItem(storageKey, '1');
    updateLabel();
  }
});
