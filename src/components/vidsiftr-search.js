import {LitElement, html} from 'lit'
import 'components/vidsiftr-search-box'

export default class VidsiftrSearch extends LitElement {
  render() {
    return html`
      <vidsiftr-search-box></vidsiftr-search-box>

      <!-- TODO(zmd): <vidsiftr-search-results></vidsiftr-search-results> -->
      <div id="search-results">
        <p>No results.</p>
      </div>
    `
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
