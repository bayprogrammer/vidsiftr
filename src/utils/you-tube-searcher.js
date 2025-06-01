export default class YouTubeSearcher {
  constructor(keywords, maxResults, apiKey, endpoint) {
    this.keywords = keywords
    this.maxResults = maxResults
    this.apiKey = apiKey
    this.endpoint = endpoint

    this._lastResponseBody = null
  }

  async fetch() {
    const response = await fetch(this.url)
    const status = response.status
    const body = await response.json()

    if (!response.ok) {
      console.log("YouTubeSifter: encountered error", status, body)
      return []
    }

    this._lastResposneBody = body

    // TODO(zmd): do we want to transform the results array?
    return body.items
  }

  get url() {
    return `${this.endpoint}?${this.params}`
  }

  get params() {
    return new URLSearchParams({
      part: 'snippet',
      maxResults: this.maxResults,
      order: 'relevance',
      type: 'video',
      fields: 'etag,nextPageToken,items/id(videoId),items/snippet(publishedAt,title,description,thumbnails)',
      q: this.keywords,
      key: this.apiKey
    }).toString()
  }
}
