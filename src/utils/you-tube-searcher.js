export default class YouTubeSearcher {
  #lastResponseBody = null

  constructor(keywords, maxResults, apiKey, endpoint) {
    this.keywords = keywords
    this.maxResults = maxResults
    this.apiKey = apiKey
    this.endpoint = endpoint
  }

  async fetchItems() {
    try {
      const response = await fetch(this.#fetchItemsUrl)
      const status = response.status
      const body = await response.json()

      if (!response.ok) {
        console.log("YouTubeSifter: encountered error", status, body)
        return []
      }

      console.log('old last response body was: ' + this.#lastResponseBody)
      this.#lastResponseBody = body

      return body.items
    } catch (e) {
      console.log(`Unable to search YouTube: ${e.message}`)
      return []
    }
  }

  //async fetchCommentCounts() {
  //  // TODO(zmd): implement me
  //}

  get #fetchItemsUrl() {
    return `${this.endpoint}?${this.#fetchItemsParams}`
  }

  get #fetchItemsParams() {
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
