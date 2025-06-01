import {LitElement, html} from 'lit'
import 'components/vidsiftr-search-result'

export default class VidsiftrSearchResults extends LitElement {
  render() {
    return html`
      <div>
        <div class="status">
          <p>No Results.</p>
        </div>

        <div class="results">
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
          <vidsiftr-search-result></vidsiftr-search-result>
        </div>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-results', VidsiftrSearchResults)
