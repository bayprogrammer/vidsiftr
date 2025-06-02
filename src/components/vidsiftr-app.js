import {LitElement, css, html} from 'lit'
import 'components/vidsiftr-logo'
import 'components/vidsiftr-search'

export default class VidsiftrApp extends LitElement {
  static styles = css`
    :host {
      margin: 0;
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      display: block;
      max-width: 960px;
      min-width: 340px;
      background-color: #ffe6cb;
      box-shadow: 0 0 10px -3px black;
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }

    * {
      margin: 0;
      padding: 0;
    }

    main {
      flex: 1;
    }

    footer {
      clear: both;
      font-family: sans;
      font-size: 8pt;
      padding: 0.5em;
      text-align: center;
      background: #ffc0ac;
      text-decoration: none;
      text-shadow: 0px 1px #f4dfd8;
      color: #844637;
    }

    a {
      color: #844637;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `

  render() {
    return html`
      <header>
        <vidsiftr-logo></vidsiftr-logo>
      </header>

      <main>
        <vidsiftr-search></vidsiftr-search>
      </main>

      <footer>
        <p>&#x2665; Made with love by <a href="mailto:zebdeos@bayprogrammer.com">Zeb DeOs</a>.</p>
      </footer>
    `
  }
}

customElements.define('vidsiftr-app', VidsiftrApp)
