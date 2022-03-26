function footerComponent(element) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `
  <div class="seccion-footer">
    <div class="footer__logo">
      <p class="footer__logo__desarrollado-por">Este sitio fue desarrollado por</p>
      <img class="footer__logo__img" src="./img/daniela.png" alt="logo" />
      <p class="footer__logo__derechos-reservados">© 2022 Daniela Akerman</p>
      </div>
      
    </div>  
`;

  element.appendChild(componentEl);
}
