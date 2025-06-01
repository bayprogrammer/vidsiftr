import {LitElement, css, html} from 'lit'

export default class VidsiftrLogo extends LitElement {
  static styles = css`
    span {
      mix-blend-mode: lighten;
    }

    h1 {
      margin: 0;
      padding: 56pt;
      color: rgb(240, 226, 232);
      background-color: rgb(234, 19, 49);
      text-align: center;
    }
  `

  render() {
    return html`<h1>VidSiftr <span>&#x1F3AC;</span></h1>`
  }
}

customElements.define('vidsiftr-logo', VidsiftrLogo)
