import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchResult extends LitElement {
  static styles = css`
    .result {
      display: block;
      overflow: hidden;
      position: relative;
    }

    p {
      margin: 0;
      padding: 0;
      line-height: 1.5em;
    }

    .title {
      /*
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      */

      border: solid 1px gray;
      background: tomato;

      padding: 0;
      margin: 0;

      display: block;
      height: 3em;
      overflow: hidden;
    }

    .thumbnail {
      /* TODO(zmd) */
    }

    .comment-count {
      /* TODO(zmd) */
    }

    .description {
      /* TODO(zmd) */
    }
  `

  render() {
    return html`
      <a class="result" href="#">
        <div class="title">
          <p>How to earn a trillion dollars working only 10 minutes every day!</p>
        </div>
        <div class="thumbnail">
          <p>Just imagine how awesome this thumbnail is</p>
        </div>
        <div class="comment-count">
          <p><span style="font-size: 150%; font-weight: bold">&#x1F5E8;</span> 100000000000000</p>
        </div>
        <div class="description">
          <p>This is totally a description</p>
        </div>
      </a>
    `
  }
}

customElements.define('vidsiftr-search-result', VidsiftrSearchResult)
