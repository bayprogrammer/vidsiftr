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
             class="${this.searchOrder == 'date' ? 'active' : ''}"
             href="#">search by date</a>
        </li>
        <li>
          <a id="order-by-rating"
             class="${this.searchOrder == 'rating' ? 'active' : ''}"
             href="#">search by rating</a>
        </li>
        <li>
          <a id="order-by-relevance"
             class="${this.searchOrder == 'relevance' ? 'active' : ''}"
             href="#">search by relevance</a>
        </li>
      </ol>
    `
  }

  // TODO(zmd): searchOrderUpdated = (event) => { /* ... */ }
}

customElements.define('vidsiftr-search-order', VidsiftrSearchOrder)
