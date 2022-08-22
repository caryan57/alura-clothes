export function scrollAnimation(anchor) {
  const sections = {
    '#best-sellers': document.querySelector('#best-sellers'),
  };

  anchor.addEventListener('click', e => {
    e.preventDefault();
    const anchorTarget = e.target.getAttribute('href');
    const targetSection = sections[anchorTarget];

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
}
