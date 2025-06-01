import {LitElement, html} from 'lit'
import 'components/vidsiftr-logo'
import 'components/vidsiftr-search'

export default class VidsiftrApp extends LitElement {
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
