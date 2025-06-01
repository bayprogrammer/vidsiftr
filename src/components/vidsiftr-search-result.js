import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchResult extends LitElement {
  static styles = css`
    .result {
      display: block;
      overflow: hidden;
      height: 100%;
      border-radius: 3px;
    }

    a, p {
      margin: 0;
      padding: 0;
      line-height: 1.5em;
      text-decoration: none;
      font-family: sans;
    }

    .title {
      display: block;
      height: 3em;
      overflow: hidden;
      font-size: 12pt;
      padding: 0.25em;
      padding-left: 0.5em;
      padding-right: 0.5em;
      background: #6c3223;
      color: #f0c0ac;
      text-align: center;
      letter-spacing: 0.05em;
    }

    .title:hover {
      text-decoration: underline;
    }

    .thumbnail {
      position: relative;
      line-height: 0;
    }

    .thumbnail > img {
      width: 100%;
    }

    .comment-count, .description {
      color: #4f1709;
      background: #f0c0ac;
    }

    .comment-count {
      position: absolute;
      bottom: 0.4em;
      right: 0.4em;
      border: solid 1px #dbab97;
      opacity: 50%;
      border-right: none;
      border-bottom: none;
      padding: 0.25em;
      padding-left: 0.5em;
      padding-right: 0.5em;
      box-sizing: border-box;
      font-size: 8pt;
      border-radius: 4px;
      background: #e3a89b;
      color: #421d13;
    }

    .comment-count:hover, .comment-count:focus {
      opacity: 100%;
    }

    .description {
      display: block;
      height: 3.5em;
      overflow: scroll;
      font-size: 10pt;
      padding: 1em;
    }
  `

  render() {
    return html`
      <div class="result">
        <a target="_blank" href="#">
          <div class="title">
            <p>How to earn a trillion dollars working only 10 minutes every day!</p>
          </div>
          <div class="thumbnail">
            <img
              class="thumbnail-default"
              src="https://i.ytimg.com/vi/3EztTIYVa1E/default.jpg"
            >
            <div class="comment-count">
              <p><span style="font-size: 150%; font-weight: bold">&#x1F5E8;</span> 1.2k</p>
            </div>
          </div>
        </a>
        <div class="description">
          <p>This is totally a description This is totally a description This is totally a description This is totally a description This is totally a description This is totally a description</p>
        </div>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-result', VidsiftrSearchResult)
