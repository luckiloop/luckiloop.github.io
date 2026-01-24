const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const links = navMenu.querySelectorAll('a');
const hero = document.getElementById('hero');
const sections = document.querySelectorAll('.content-section');
menuIcon.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('data-target');

    if(targetId === 'hero'){
      hero.style.display = 'flex';
      sections.forEach(sec => sec.classList.remove('show'));
      sections.forEach(sec => sec.classList.add('hidden'));
    } else {
      hero.style.display = 'none';
      sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('show');
      });
      const targetSection = document.getElementById(targetId);
      targetSection.classList.remove('hidden');
      targetSection.classList.add('show');
    }
    navMenu.style.display = 'none';
  });
});
const footer = document.getElementById('footer');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('data-target');

    if(targetId === 'hero'){
      hero.style.display = 'flex';
      sections.forEach(sec => sec.classList.remove('show'));
      sections.forEach(sec => sec.classList.add('hidden'));
      footer.style.display = 'block';  // show footer on Home
    } else {
      hero.style.display = 'none';
      sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('show');
      });
      const targetSection = document.getElementById(targetId);
      targetSection.classList.remove('hidden');
      targetSection.classList.add('show');
      footer.style.display = 'none';  // hide footer on other pages
    }
    navMenu.style.display = 'none';
  });


});
