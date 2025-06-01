import {LitElement, css, html} from 'lit'
import 'components/vidsiftr-search-result'

export default class VidsiftrSearchResults extends LitElement {
  static styles = css`
    #results {
      padding: 0;
      margin: 2%;
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

  render() {
    return html`
      <div id="results">
        <vidsiftr-search-result
          .videoUrl=${"https://www.youtube.com/watch?v=zofMnllkVfI"}
          .title=${"JavaScript - Introduction - W3Schools.com"}
          .thumbnailUrl=${"https://i.ytimg.com/vi/zofMnllkVfI/hqdefault.jpg"}
          .commentCount=${"TBD"}
          .description=${"This video is an introduction to JavaScript. Part of a series of video tutorials to learn JavaScript for beginners! The page this is ..."}
        ></vidsiftr-search-result>
        <div id="clearfix"></div>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-results', VidsiftrSearchResults)
