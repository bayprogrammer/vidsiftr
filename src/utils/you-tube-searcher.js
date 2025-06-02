export default class YouTubeSearcher {
  constructor(keywords, maxResults, apiKey, endpoint) {
    this.keywords = keywords
    this.maxResults = maxResults
    this.apiKey = apiKey
    this.endpoint = endpoint

    // TODO(zmd): declare in class directly?
    // TODO(zmd): privatize member
    this._lastResponseBody = null
  }

  async fetchItems() {
    try {
      // TODO(zmd): we need separate urls for seprate calls (search vs. single
      //   video)
      const response = await fetch(this.url)
      const status = response.status
      const body = await response.json()

      if (!response.ok) {
        console.log("YouTubeSifter: encountered error", status, body)
        return []
      }

      // TODO(zmd): privatize member
      this._lastResponseBody = body

      return body.items
    } catch (e) {
      console.log(`Unable to search YouTube: ${e.message}`)
      return []
    }
  }

  //async fetchCommentCounts() {
  //  // TODO(zmd): implement me
  //}

  // TODO(zmd): we need separate urls for separate calls (search vs. single
  //   video)
  // TODO(zmd): privatize getter
  get url() {
    return `${this.endpoint}?${this.params}`
  }

  // TODO(zmd): privatize getter
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
