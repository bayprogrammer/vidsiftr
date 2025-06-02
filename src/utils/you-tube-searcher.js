export default class YouTubeSearcher {
  #keywords
  #order
  #maxResults
  #apiKey
  #endpoint

  #items = null
  #videoIds = null

  constructor(keywords, order, maxResults, apiKey, endpoint) {
    this.#keywords = keywords
    this.#order = order
    this.#maxResults = maxResults
    this.#apiKey = apiKey
    this.#endpoint = endpoint
  }

  async fetchItems() {
    if (this.#items) {
      console.warn("Previously fetched video items, returning those.")

      return this.#items
    }

    const body = await this.#fetch(this.#fetchItemsUrl)
      ?? { items: [] }

    this.#items = body.items
    this.#videoIds = body.items.map(item => item.id.videoId)

    return body.items
  }

  async fetchCommentCounts() {
    if (!this.#videoIds) {
      console.warn("Cannot fetch comments if we don't have the videos yet.")

      return {}
    }

    const body = await this.#fetch(this.#fetchCommentCountsUrl)

    return Object.fromEntries(body.items.map(item => [
      item.id,
      item.statistics.commentCount,
    ]))
  }

  async #fetch(url) {
    try {
      const response = await fetch(url)
      const status = response.status
      const body = await response.json()

      if (!response.ok) {
        console.error("YouTubeSearcher: encountered error", status, body)

        return null
      }

      return body
    } catch (e) {
      console.error(`Unable to access YouTube: ${e.message}`)

      return null
    }
  }

  get #fetchItemsUrl() {
    return `${this.#endpoint}/search?${this.#fetchItemsParams}`
  }

  get #fetchItemsParams() {
    return new URLSearchParams({
      part: 'snippet',
      maxResults: this.#maxResults,
      order: this.#order,
      type: 'video',
      fields: 'items/id(videoId),items/snippet(title,description,thumbnails)',
      q: this.#keywords,
      key: this.#apiKey
    }).toString()
  }

  get #fetchCommentCountsUrl() {
    return `${this.#endpoint}/videos?${this.#fetchCommentCountParams}`
  }

  get #fetchCommentCountParams() {
    return new URLSearchParams({
      part: 'statistics',
      id: this.#videoIds?.join(',') ?? '',
      fields: 'items/id,items/statistics(commentCount)',
      key: this.#apiKey,
    }).toString()
  }
}
