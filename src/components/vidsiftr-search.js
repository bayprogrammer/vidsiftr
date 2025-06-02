import {LitElement, html, nothing} from 'lit'
import {YouTubeSearcher, abbrevNumber} from 'utils'
import config from 'config' with { type: 'json' }
import 'components/vidsiftr-search-box'
import 'components/vidsiftr-search-results'

export default class VidsiftrSearch extends LitElement {
  constructor() {
    super()

    this.addEventListener('search-submitted', this.handleSearchSubmitted)
  }

  render() {
    return html`
      <vidsiftr-search-box></vidsiftr-search-box>
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
    // TODO(zmd): re-enable getting real items from teh tubez
    //searchResultsEle.items = await youTube.fetchItems()
    const items = this.#ytConfig.searchFixtures[keywords]?.items ?? []
    searchResultsEle.items = items

    // TODO(zmd): fetch & propagate comment counts
    // searchResultsEle.commentCounts = await youTube.fetchCommentCounts()

    // TODO(zmd): remove fake comment count'n
    const commentCounts = Object.fromEntries(items.map(item => [
      item.id.videoId,
      abbrevNumber(Math.floor(Math.random() * 10_000_000))
    ]))

    searchResultsEle.itemCommentCounts = commentCounts
  }

  get #ytConfig() {
    return config.YouTubeDataApi
  }

  get #searchResultsEle() {
    return this.renderRoot.getElementById('search-results')
  }
}

customElements.define('vidsiftr-search', VidsiftrSearch)
