import {LitElement, html} from 'lit'
import config from 'config' with { type: 'json' }
import 'components/vidsiftr-search-box'
import 'components/vidsiftr-search-results'

export default class VidsiftrSearch extends LitElement {
  constructor() {
    super()

    this.addEventListener('search-submitted', this.handleSearchSubmitted)

    // TODO(zmd): temporary testing, remove once finished
    //this.testResult = config.YouTubeDataApi.fixtures['javascript']
    //this.testResult = {items: []}
    //this.testResult = undefined
    //this.testResult = null
  }

  render() {
    return html`
      <vidsiftr-search-box></vidsiftr-search-box>
      <vidsiftr-search-results
        .items=${this.testResult?.items}
      ></vidsiftr-search-results>
    `
  }

  handleSearchSubmitted = (event) => {
    // TODO(zmd): remove logging
    console.log(event.detail.keywords)
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
