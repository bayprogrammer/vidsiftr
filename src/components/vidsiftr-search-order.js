import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchOrder extends LitElement {
  static properties = {
    searchOrder: { type: 'String' },
  }

  static styles = css`
    .active {
      font-weight: bold;
    }

    ol {
      list-style: none;
      text-align: center;
      padding: .35em;
      padding-bottom: .5em;
      margin: 0;
      background: #ffc0ac;
    }

    li {
      display: inline-block;
    }

    a {
      text-decoration: none;
      text-shadow: 0px 1px #f4dfd8;
      color: #844637;
      font-family: sans;
      font-size: 9pt;
      padding: 0.5em;
    }

    a:hover {
      text-decoration: underline;
    }
  `

  render() {
    return html`
      <ol>
        <li>
          <a id="order-by-date"
             value="date"
             class="${this.searchOrder == 'date' ? 'active' : ''}"
             href="#"
             @click="${this.searchOrderUpdated}"
          >
            search by date
          </a>
        </li>
        <li>
          <a id="order-by-rating"
             value="rating"
             class="${this.searchOrder == 'rating' ? 'active' : ''}"
             href="#"
             @click="${this.searchOrderUpdated}"
          >
            search by rating
          </a>
        </li>
        <li>
          <a id="order-by-relevance"
             value="relevance"
             class="${this.searchOrder == 'relevance' ? 'active' : ''}"
             href="#"
             @click="${this.searchOrderUpdated}"
          >
            search by relevance
          </a>
        </li>
      </ol>
    `
  }

  searchOrderUpdated = (event) => {
    event.preventDefault()
    const searchOrder = event.target.getAttribute('value')

    this.dispatchEvent(new CustomEvent('search-order-updated', {
      bubbles: true,
      composed: true,
      detail: { searchOrder },
    }))
  }
}

customElements.define('vidsiftr-search-order', VidsiftrSearchOrder)
