const navButtons = document.querySelectorAll('.mobile-bottom-bar button');
const sections = ['dashboard', 'nuevo-parte', 'implicados', 'revision', 'exportacion'];

navButtons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    navButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(sections[idx])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
