function addHiddenVisibility(firstEl, currentEl) {
  const currentItemTop = currentEl.getBoundingClientRect().top;
  const firstItemTop = firstEl.getBoundingClientRect().top;

  if (firstItemTop < currentItemTop) {
    currentEl.classList.add('hidden');
  } else {
    currentEl.classList.remove('hidden');
  }
}

function wrappedEventListener(firstEl, currentEl) {
  window.addEventListener('load', function (e) {
    addHiddenVisibility(firstEl, currentEl);
  });

  window.addEventListener('resize', function (e) {
    addHiddenVisibility(firstEl, currentEl);
  });
}

export function hideWrappedElements(carrousels) {
  carrousels.forEach(carrousel => {
    const items = carrousel.querySelectorAll('.carrousel__gallery__item');

    for (let index = 0; index < items.length; index++) {
      const firstItem = items[0];
      const currItem = items[index];

      wrappedEventListener(firstItem, currItem);
    }
  });
}
