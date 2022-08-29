class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
        <div class="footer__container">
          <div class="footer__items">
            <div class="footer__item-logo">
              <i class="logo-icon cherry fa-solid fa-shirt"></i>
              <a class="logo-text" href="http://"
                ><p><span class="cherry">Alura</span>Clothes</p></a
              >
            </div>
            <div class="footer__item-nav">
              <ul class="footer__item-nav__list">
                <li class="footer__item-nav__item">AluraClothes ®</li>
                <li class="footer__item-nav__item">
                  <a href="">Quienes somos</a>
                </li>
                <li class="footer__item-nav__item">
                  <a href="">Política de privacidad</a>
                </li>
                <li class="footer__item-nav__item">
                  <a href="">Programa de lealtad</a>
                </li>
                <li class="footer__item-nav__item">
                  <a href="">Nuestras tiendas</a>
                </li>
                <li class="footer__item-nav__item">
                  <a href="">Quiero ser franquiciado</a>
                </li>
                <li class="footer__item-nav__item">
                  <a href="">Anunciate con nosotros</a>
                </li>
              </ul>
            </div>
            <div class="footer__item-contact">
              <h4 class="footer__item-contact__title">Escríbenos</h4>
              <form action="" class="footer__item-form">
                <div class="footer__form--input">
                  <label for="name">Nombre</label>
                  <input
                    class="form--input__name"
                    id="name"
                    name="message"
                    type="text"
                    placeholder="Su nombre"
                    maxlength="40"
                    data-form="name"
                    required
                  />
                </div>
                <div class="footer__form--input">
                  <label for="message">Mensaje</label>
                  <textarea
                    class="form--input__message"
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    maxlength="120"
                    placeholder="Ingrese su mensaje"
                    data-form="message"
                    required
                  ></textarea>
                </div>
                <input
                  class="footer__item-form__button"
                  type="submit"
                  value="Enviar mensaje"
                />
              </form>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          <p>
            Desarrollado por
            <a href="https://www.linkedin.com/in/charlyolicor/" target="_blank"
              >Carlos Olivares</a
            >
            | En el program ONE de Oracle y Alura - © 2022
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
