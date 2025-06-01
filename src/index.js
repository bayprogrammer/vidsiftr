import page from 'page'
import YouTubeSearcher from 'utils/you-tube-searcher'
import config from 'config' with { type: 'json' }

const searchPage = document.getElementById('page-search')
const resultsPage = document.getElementById('page-results')
const aboutPage = document.getElementById('page-about')

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-box')
const resultsList = document.getElementById('results-list')

const pages = [searchPage, resultsPage, aboutPage]

function flipTo(pageEle) {
  window.requestAnimationFrame(timestamp => {
    pages.filter(ele => ele !== pageEle)
         .forEach(ele => ele.classList.add('page-hidden'))
    pageEle.classList.remove('page-hidden')
  })
}

async function processSearch() {
  // TODO(zmd): we probably don't want to do this all entirely within a single
  //   animation frame, TBH
  window.requestAnimationFrame(async timestamp => {
    resultsList.textContent = ""

    // TODO(zmd): allow order to be specified (date | rating | relevance)
    const keywords = new URLSearchParams(window.location.search).get('q')

    const sifter = new YouTubeSifter(
      keywords,
      8,
      config.YouTubeDataApi.key,
      config.YouTubeDataApi.endpoint,
    )

    // TODO(zmd): use the result
    const results = await sifter.fetch()
    console.log(results)

    if (results.length > 0) {
      results.forEach(result => {
        // TODO(zmd): could we ever not have a default thumbnail?
        const { videoId } = result.id
        const { title, description, thumbnails } = result.snippet
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
        const defaultThumbnailUrl = thumbnails.default.url

        const item = document.createElement("li")

        // TODO(zmd): so ghetto
        item.innerHTML = `
          <a target="_blank" href="${videoUrl}">
            ${title}<br>
            <img src="${defaultThumbnailUrl}">
          </a>
          <p>${description}</p>
        `

        resultsList.appendChild(item)
      })
    } else {
      const item = document.createElement("li")
      item.textContent = 'No results.'
      resultsList.appendChild(item)
    }
  })
}

searchForm.addEventListener('submit', event => {
  const searchParams = new URLSearchParams({
    q: searchInput.value,
  })

  page('/results?' + searchParams.toString())
  event.preventDefault()
})

// TODO(zmd): the search field should be cleared when navigating to the search
//   page
page('/', () => flipTo(searchPage))

page('/results', () => {
  flipTo(resultsPage)
  processSearch()
})

page('/about', () => flipTo(aboutPage))

page.start()
