import {LitElement, css, html} from 'lit'

export default class VidsiftrLogo extends LitElement {
  static styles = css`
    h1 {
      margin: 0;
      padding: 56pt;
      color: #f0e2e8;
      background-color: #842610;
      text-align: center;
      font-family: sans-serif;
      font-weight: lighter;
      font-size: 35pt;
      letter-spacing: 0.45rem;
    }
  `

  render() {
    return html`<h1>VidSiftr</h1>`
  }
}

customElements.define('vidsiftr-logo', VidsiftrLogo)
