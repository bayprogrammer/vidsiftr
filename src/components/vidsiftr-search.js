import {LitElement, html} from 'lit'
import config from 'config' with { type: 'json' }
import 'components/vidsiftr-search-box'
import 'components/vidsiftr-search-results'

export default class VidsiftrSearch extends LitElement {
  constructor() {
    super()

    // TODO(zmd): temporary testing, remove once finished
    this.testResult = config.YouTubeDataApi.fixtures['javascript']
  }

  render() {
    return html`
      <vidsiftr-search-box></vidsiftr-search-box>
      <vidsiftr-search-results
        .items=${this.testResult.items}
      ></vidsiftr-search-results>
    `
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
