import {LitElement, html} from 'lit'
import {YouTubeSearcher} from 'utils'
import config from 'config' with { type: 'json' }
import 'components/vidsiftr-search-box'
import 'components/vidsiftr-search-order'
import 'components/vidsiftr-search-results'

export default class VidsiftrSearch extends LitElement {
  #validSearchOrders = new Set(['date', 'rating', 'relevance'])
  #defaultSearchOrder = 'date'

  static properties = {
    _searchOrder: { state: true }
  }

  constructor() {
    super()

    this._searchOrder = this.#defaultSearchOrder

    this.addEventListener('search-submitted', this.handleSearchSubmitted)
    this.addEventListener('search-order-updated', this.handleSearchOrderUpdated)
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
      this._searchOrder,
      50,
      this.#ytConfig.key,
      this.#ytConfig.endpoint,
    )

    searchResultsEle.updateStatus('Searching...')
    const items = await youTube.fetchItems()
    searchResultsEle.items = items

    const commentCounts = await youTube.fetchCommentCounts()
    searchResultsEle.itemCommentCounts = commentCounts
  }

  handleSearchOrderUpdated = (event) => {
    const searchOrder = event.detail.searchOrder

    if (this.#validSearchOrders.has(searchOrder)) {
      this._searchOrder = searchOrder
    } else {
      this._searchOrder = this.#defaultSearchOrder
    }
  }

  get #ytConfig() {
    return config.YouTubeDataApi
  }

  get #searchResultsEle() {
    return this.renderRoot.getElementById('search-results')
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
