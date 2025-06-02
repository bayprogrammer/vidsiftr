import {LitElement, css, html} from 'lit'
import 'components/vidsiftr-search-result'

export default class VidsiftrSearchResults extends LitElement {
  static properties = {
    items: { type: 'Array' },
    itemCommentCounts: { type: 'Array' },
    status: { type: 'String' },
  }

  static styles = css`
    #results {
      padding: 0;
      margin: 2%;
    }

    #no-results {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #no-results p {
      font-size: 20pt;
      font-family: sans;
      color: #842610;
    }

    vidsiftr-search-result {
      padding: 0;
      margin: 2%;
      float: left;
      width: 45.6%;
      border: 1px solid #f2d2b0;
      box-shadow: #885e31 1px 1px 4px -2px;
    }

    vidsiftr-search-result:hover {
      box-shadow: #3d260e 2px 2px 9px -4px;
    }

    @media(max-width: 650px) {
      #results {
        margin: 4%;
      }

      vidsiftr-search-result {
        margin: 4%;
        margin-left: auto;
        margin-right: auto;
        float: none;
        width: 100%;
        display: block;
      }
    }

    #clearfix {
      clear: both;
    }
  `

  constructor() {
    super()

    this.resetStatus()
  }

  resetStatus() {
    this.items = null
    this.status = 'Submit a search to get started...'
  }

  updateStatus(newStatus) {
    this.items = null
    this.status = newStatus
  }

  render() {
    return html`
      <div id="results">
        ${this.items
            ? this.#renderItems(this.items)
            : this.#renderNoResults()}
        <div id="clearfix"></div>
      </div>
    `
  }

  #renderItems = (items) => {
    return items.length < 1
      ? this.#renderNoResults('No videos found for your keywords.')
      : items.map(this.#renderItem)
  }

  #renderItem = (item) => {
    const { videoId } = item.id
    const { title, description, thumbnails } = item.snippet

    return html`
      <vidsiftr-search-result
        .videoUrl=${this.#videoUrl(videoId)}
        .title=${title}
        .thumbnailUrl=${this.#thumbnailUrl(thumbnails)}
        .commentCount=${this.#itemCommentCount(videoId)}
        .description=${description}
      ></vidsiftr-search-result>
    `
  }

  #videoUrl(videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`
  }

  #thumbnailUrl(thumbnails) {
    return thumbnails?.high?.url
      ?? thumbnails?.medium?.url
      ?? thumbnails?.default?.url
  }

  #itemCommentCount(videoId) {
    return this.itemCommentCounts
      ? this.itemCommentCounts[videoId] ?? '...'
      : '...'
  }

  #renderNoResults(status) {
    status ??= this.status

    return html`
      <div id="no-results"><p>${status}</p></div>
    `
  }
}

customElements.define('vidsiftr-search-results', VidsiftrSearchResults)
