import {LitElement, css, html} from 'lit'

export default class VidsiftrSearchResult extends LitElement {
  static properties = {
    videoUrl: { type: 'String' },
    title: { type: 'String' },
    thumbnailUrl: { type: 'String' },
    commentCount: { type: 'String' },
    description: { type: 'String' },
  }

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
      height: 5em;
      overflow: overflow;
      font-size: 10pt;
      padding: 1em;
    }
  `

  render() {
    return html`
      <div class="result">
        <a target="_blank" href="${this.videoUrl}">
          <div class="title">
            <p>${this.title}</p>
          </div>
          <div class="thumbnail">
            <img class="thumbnail-default" src="${this.thumbnailUrl}">
            ${this.#renderCommentCount()}
          </div>
        </a>
        <div class="description">
          <p>
            ${this.description.length > 0
                ? this.description
                : html`<em>No description available.</em>`}
          </p>
        </div>
      </div>
    `
  }

  #renderCommentCount() {
    if (!this.commentCount) {
      return null
    }

    return html`
      <div class="comment-count">
        <p>
          <span style="font-size: 150%; font-weight: bold">&#x1F5E8;</span>
          ${this.commentCount}
        </p>
      </div>
    `
  }
}

customElements.define('vidsiftr-search-result', VidsiftrSearchResult)
