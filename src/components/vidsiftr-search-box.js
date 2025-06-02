import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 20pt;
      background-color: #ec9175;
    }

    form {
      margin-left: auto;
      margin-right: auto;
      max-width: 500px;
      position: relative;
      background-color: white;
      box-shadow: 0 0 4px -2px black;
      border-radius: 4px;
    }

    input {
      padding: 0;
      margin: 0;
      padding-left: 1em;
      padding-right: calc(70pt + 1em);
      display: inline-block;
      width: calc(100% - 2em - 70pt);
      height: 25pt;
      border: none;
      background: none;
      border-radius: 4px;
      font-size: 11.5pt;
      color: #692211;
    }

    button {
      display: block;
      border: none;
      border-left: solid 1px #dbab97;
      border-radius: 0 4px 4px 0;
      color: #4f1709;
      background: #f0c0ac;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 70pt;
      font-size: 10pt;
      letter-spacing: 0.05rem;
    }

    button:hover {
      background: #e3a89b;
      color: #421d13;
      border-left: solid 1px #df9888;
    }

    button:active {
      background: #6c3223;
      color: #f0c0ac;
    }
  `

  render() {
    return html`
      <form @submit="${this.formSubmitted}">
        <input type="text" name="keywords" id="keywords" placeholder="Keywords">
        <button>Sift!</button>
      </form>
    `
  }

  formSubmitted = (event) => {
    event.preventDefault()
    const keywords = this._input?.value ?? ''

    this.dispatchEvent(new CustomEvent('search-submitted', {
      bubbles: true,
      composed: true,
      detail: { keywords },
    }))
  }

  get _input() {
    return this.renderRoot?.getElementById('keywords') ?? null
  }
}

customElements.define('vidsiftr-search-box', VidsiftrSearchBox)
