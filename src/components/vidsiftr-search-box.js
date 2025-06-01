import {LitElement, html} from 'lit'

export default class VidsiftrSearchBox extends LitElement {
  render() {
    return html`
      <div>
        <label for="search-box">Search:</label>
        <input name="search-box" id="search-box" type="text" />
        <input name="search-submit"
               id="search-submit"
               type="submit"
               value="&#x1F50D Sift!" />
      </div>
    `
  }
}

customElements.define('vidsiftr-search-box', VidsiftrSearchBox)
