class HeaderAdmin extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
          <div class="header__container">
            <div class="header__logo">
              <i class="logo-icon cherry fa-solid fa-shirt"></i>
              <a class="logo-text" href="https://caryan57.github.io/alura-clothes/"><h1><span class="cherry">Alura</span>Clothes</h1></a>
            </div>
            <form action="" class="header__search-form">
              <input
                type="text"
                class="header__search-form__input"
                placeholder="¿Qué deseas buscar?"
                maxlength="34"
              />
              <button class="header__search-form__button" type="submit" value="">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div class="header__button-container">
              <a href="../../pages/products/showProducts.html" class="header__button">Productos Admin</a>
            </div>
          </div>
    </header>
    `;
  }
}

customElements.define('header-admin-component', HeaderAdmin);
