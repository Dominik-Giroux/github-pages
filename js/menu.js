class HeaderMenu extends HTMLElement {
  constructor(){
    super();

    this.innerHTML = `
      <header>
        <nav>
          <a href="/github-pages/">Home</a>
          <a href="/github-pages/about">About</a>
        </nav>
      </header>
    `;

  }
}

customElements.define('header-menu', HeaderMenu);