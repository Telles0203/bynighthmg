function loadPage(route) {
  fetch(`/src/pages/${route}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('page-content').innerHTML = html;
      history.pushState({}, '', `/${route}`);
    })
    .catch(() => {
      document.getElementById('page-content').innerHTML = '<h1>404</h1>';
    });
}

window.addEventListener('popstate', () => {
  const route = location.pathname.replace('/', '') || 'home';
  loadPage(route);
});

document.addEventListener('DOMContentLoaded', () => {
  const route = location.pathname.replace('/', '') || 'home';
  loadPage(route);
});
