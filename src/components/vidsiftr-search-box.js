import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 20pt;
      /* background-color: #ec7575; */
      background-color: #ec9175;
    }

    div {
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
    }

    button {
      display: block;
      border: none;
      color: #4f1709;
      /* background: #9b4e4e; */
      /* background: #9b5c4e; */
      background: #f0c0ac;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 70pt;
      border-radius: 0 4px 4px 0;
    }

    button:hover {
      /* background: #b95959; */
      background: #ce9b8f;
      color: #421d13;
    }

    button:active {
      /* background: #793333; */
      background: #6c3223;
      color: #f0c0ac;
    }
  `

  render() {
    return html`
      <div>
        <input type="text" placeholder="Keywords">
        <button>Sift!</button>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-box', VidsiftrSearchBox)
