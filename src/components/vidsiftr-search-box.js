import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 20pt;
      background-color: rgb(244, 120, 120);
    }

    div {
      margin-left: auto;
      margin-right: auto;
      padding: 5pt;
      /* border: solid 1px black; */
      max-width: 600px;
      position: relative;
      background-color: white;
    }

    input {
      padding: 0;
      margin: 0;
      display: inline-block;
      width: calc(100% - 70pt);
      height: 15pt;
      border: none;
      background: none;
    }

    button {
      display: block;
      border: none;
      color: white;
      background: #9b4e4e;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 70pt;
      /*
      padding-left: 10pt;
      padding-right: 10pt;
      */
    }

    button:hover {
      background: #b95959;
    }

    button:active {
      background: #793333;
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
