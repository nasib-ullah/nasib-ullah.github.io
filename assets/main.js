'use strict';
const filters = document.querySelector('.filters');
const publications = [...document.querySelectorAll('.publication')];
if (filters) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const topic = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    publications.forEach(item => { item.hidden = topic !== 'all' && item.dataset.topic !== topic; });
    const count = publications.filter(item => !item.hidden).length;
    document.getElementById('filter-status').textContent = `${count} publications shown.`;
  });
}
