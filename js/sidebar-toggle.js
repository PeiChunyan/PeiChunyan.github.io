document.addEventListener('DOMContentLoaded', function () {
  const storageKey = 'mp-sidebar-collapsed';
  const collapsed = localStorage.getItem(storageKey) === '1';

  // create toggle button
  const btn = document.createElement('button');
  btn.className = 'mp-sidebar-toggle';
  btn.type = 'button';
  btn.title = 'Toggle sidebar';

  const updateLabel = () => {
    btn.textContent = document.body.classList.contains('mp-sidebar-collapsed') ? '展开侧边栏' : '折叠侧边栏';
  };

  // apply initial state
  if (collapsed) document.body.classList.add('mp-sidebar-collapsed');
  updateLabel();

  btn.addEventListener('click', function () {
    const isCollapsed = document.body.classList.toggle('mp-sidebar-collapsed');
    localStorage.setItem(storageKey, isCollapsed ? '1' : '0');
    updateLabel();
  });

  // insert button into DOM (left side, below header area)
  document.body.appendChild(btn);

  // Allow pressing `s` to toggle when focus is not in input (shortcut)
  document.addEventListener('keydown', function (e) {
    if (e.key === 's' && document.activeElement && (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      btn.click();
    }
  });

  // If the site has a built-in sidebar toggle, keep behaviour consistent: observe nav changes
  const sidebar = document.querySelector('.md-sidebar');
  if (!sidebar) return;

  // If window is narrow, default to collapsed unless user explicitly set
  if (window.innerWidth <= 960 && localStorage.getItem(storageKey) === null) {
    document.body.classList.add('mp-sidebar-collapsed');
    localStorage.setItem(storageKey, '1');
    updateLabel();
  }
});
