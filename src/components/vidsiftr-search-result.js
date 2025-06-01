import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchResult extends LitElement {
  static styles = css`
    .result {
      display: block;
      overflow: hidden;
      height: 100%;
    }

    a, p {
      margin: 0;
      padding: 0;
      line-height: 1.5em;
    }

    .title {
      border: solid 1px gray;
      background: tomato;
      display: block;
      height: 3em;
      overflow: hidden;
    }

    .thumbnail {
      position: relative;
      line-height: 0;
    }

    .thumbnail > img {
      width: 100%;
    }

    .comment-count {
      position: absolute;
      bottom: 0;
      left: 0;
      background: purple;
      padding: 0.25em;
      border: 1px;
      box-sizing: border-box;
    }

    .description {
      border: solid 1px blue;
      background: green;
      display: block;
      height: 4.5em;
      overflow: hidden;
    }
  `

  render() {
    return html`
      <a target="_blank" class="result" href="#">
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
        <div class="description">
          <p>This is totally a description</p>
        </div>
      </a>
    `
  }
}

customElements.define('vidsiftr-search-result', VidsiftrSearchResult)
