import {LitElement, html} from 'lit'
import 'components/vidsiftr-search-box'
import 'components/vidsiftr-search-results'

export default class VidsiftrSearch extends LitElement {
  render() {
    return html`
      <vidsiftr-search-box></vidsiftr-search-box>
      <vidsiftr-search-results></vidsiftr-search-results>
    `
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
