export function manageDropImage(element) {
  // Define container of input
  const container = element.closest('.createProducts__drop-image');

  // Click event listener
  container.addEventListener('click', e => {
    element.click();
  });

  // Input change listener
  element.addEventListener('change', e => {
    const files = e.target.files;

    element.files = files;

    updateThumbnail(container, files[0]);
  });

  // Drag event listeners
  container.addEventListener('dragover', e => {
    e.preventDefault();
    container.classList.add('drop-image--over');
  });

  const leaveDragEvents = ['dragleave', 'dragend'];
  leaveDragEvents.forEach(type => {
    container.addEventListener(type, e => {
      container.classList.remove('drop-image--over');
    });
  });

  container.addEventListener('drop', e => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      const files = e.dataTransfer.files;

      element.files = files;

      updateThumbnail(container, files[0]);
    }

    container.classList.remove('drop-image--over');
  });
}

function updateThumbnail(dropContainer, file) {
  //Define if thumbnail exists or create it
  let thumbnailElement = document.querySelector(
    '.createProducts__drop-image__thumb'
  );

  if (thumbnailElement == null) {
    thumbnailElement = createThumbnail();
  }

  //Remove prompt (add image text and icon) if exists
  const prompt = dropContainer.querySelector(
    '.createProducts__drop-image__content'
  );

  if (prompt) {
    prompt.remove();
  }

  // Change label for thumbnail
  thumbnailElement.dataset.label = file.name;

  // Show image background for image files
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url(${reader.result})`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }

  //Add visible thumbnail to the DOM
  dropContainer.appendChild(thumbnailElement);

  // console.log(file);
}

function createThumbnail() {
  let element = document.createElement('div');
  element.classList.add('createProducts__drop-image__thumb');

  return element;
}
