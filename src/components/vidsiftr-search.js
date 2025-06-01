import {LitElement, html} from 'lit'

export default class VidsiftrSearch extends LitElement {
  render() {
    return html`
        <!-- TODO(zmd): <vidsiftr-search-box></vidsiftr-search-box> -->
        <div id="search-box">
          <label for="search-box">Search:</label>
          <input name="search-box" id="search-box" type="text" />
          <input name="search-submit"
                 id="search-submit"
                 type="submit"
                 value="&#x1F50D Sift!" />
          <form>
        </div>

        <!-- TODO(zmd): <vidsiftr-search-results></vidsiftr-search-results> -->
        <div id="search-results">
        </div>
    `
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
