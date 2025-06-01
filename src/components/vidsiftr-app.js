import {LitElement, html} from 'lit'
import 'components/vidsiftr-logo'

export default class VidsiftrApp extends LitElement {
  render() {
    return html`
      <header>
        <vidsiftr-logo></vidsiftr-logo>
      </header>

      <main>
        <!-- TODO(zmd): c'mon, do someth'n -->
      </main>

      <footer>
        <p>Copyright © 2025 Zeb DeOs</p>
      </footer>
    `
  }
}

customElements.define('vidsiftr-app', VidsiftrApp)
