import {LitElement, css, html} from 'lit'
import 'components/vidsiftr-logo'
import 'components/vidsiftr-search'

export default class VidsiftrApp extends LitElement {
  static styles = css`
    :host {
      margin: 0;
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      display: block;
      max-width: 960px;
      min-width: 340px;
      background-color: lightgray;
    }

    * {
      margin: 0;
      padding: 0;
    }
  `

  render() {
    return html`
      <header>
        <vidsiftr-logo></vidsiftr-logo>
      </header>

      <main>
        <vidsiftr-search></vidsiftr-search>
      </main>

      <footer>
        <p>Copyright © 2025 Zeb DeOs</p>
      </footer>
    `
  }
}

customElements.define('vidsiftr-app', VidsiftrApp)
