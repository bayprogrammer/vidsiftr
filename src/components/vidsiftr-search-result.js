import {LitElement, html} from 'lit'

export default class VidsiftrSearchResult extends LitElement {
  render() {
    return html`
      <div class="search-result">
        <div class="title">
          <p>How to earn a trillion dollars working only 10 minutes every day!</p>
        </div>
        <div class="thumbnail">
          <p>Just imagine how awesome this thumbnail is</p>
        </div>
        <div class="comment-count">
          <p><span style="font-size: 150%; font-weight: bold">&#x1F5E8;</span> 100000000000000</p>
        </div>
        <div class="description">
          <p>This is totally a description</p>
        </div>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-result', VidsiftrSearchResult)
