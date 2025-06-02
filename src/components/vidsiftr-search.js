import {LitElement, html} from 'lit'
import {YouTubeSearcher} from 'utils'
import config from 'config' with { type: 'json' }
import 'components/vidsiftr-search-box'
import 'components/vidsiftr-search-order'
import 'components/vidsiftr-search-results'

export default class VidsiftrSearch extends LitElement {
  static properties = {
    _searchOrder: { state: true }
  }

  constructor() {
    super()

    this._searchOrder = 'date'

    this.addEventListener('search-submitted', this.handleSearchSubmitted)
    // TODO(zmd): this.addEventListener('search-order-updated', this.handleSearchOrderUpdated)
  }

  render() {
    return html`
      <vidsiftr-search-box></vidsiftr-search-box>
      <vidsiftr-search-order
        id="search-order"
        .searchOrder="${this._searchOrder}"
      ></vidsiftr-search-order>
      <vidsiftr-search-results
        id="search-results"
      ></vidsiftr-search-results>
    `
  }

  handleSearchSubmitted = async (event) => {
    const keywords = event.detail.keywords
    const searchResultsEle = this.#searchResultsEle

    if (!keywords || keywords.length < 1) {
      searchResultsEle.resetStatus()
      return
    }

    const youTube = new YouTubeSearcher(
      keywords,
      8,
      this.#ytConfig.key,
      this.#ytConfig.endpoint,
    )

    searchResultsEle.updateStatus('Searching...')
    //const items = await youTube.fetchItems()
    const items = this.#ytConfig.searchFixtures[keywords]?.items ?? []
    searchResultsEle.items = items

    //const commentCounts = await youTube.fetchCommentCounts()
    const commentCounts = Object.fromEntries(items.map(item => [
      item.id.videoId,
      Math.floor(Math.random() * 1200)
    ]))
    searchResultsEle.itemCommentCounts = commentCounts
  }

  // TODO(zmd): handleSearchOrderUpdated

  get #ytConfig() {
    return config.YouTubeDataApi
  }

  get #searchResultsEle() {
    return this.renderRoot.getElementById('search-results')
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
