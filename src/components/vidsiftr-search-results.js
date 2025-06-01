import {LitElement, html} from 'lit'

export default class VidsiftrSearchResults extends LitElement {
  render() {
    return html`
      <div>
        <div class="status">
          <p>No Results.</p>
        </div>

        <div class="search-results-grid">
          <!-- TODO(zmd): <vidsiftr-search-result></vidsiftr-search-result> -->
          <div class="search-result">
            <div class="title">
              <p>How to earn a trillion dollars working only 10 minutes every day!</p>
            </div>
            <div class="thumbnail">
              <p>Just imagine how awesome this thumbnail is</p>
            </div>
            <div class="comment-count">
              <p>&#x1F5E8; 100000000000000</p>
            </div>
            <div class="description">
              <p>This is totally a description</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-results', VidsiftrSearchResults)
