import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchOrder extends LitElement {
  static properties = {
    searchOrder: { type: 'String' },
  }

  static styles = css`
    /* TODO(zmd): gimme style */
  `

  render() {
    return html`
      <p>Search Order Coming Soon (${this.searchOrder})</p>
    `
  }

  // TODO(zmd): searchOrderUpdated = (event) => { /* ... */ }
}

customElements.define('vidsiftr-search-order', VidsiftrSearchOrder)
