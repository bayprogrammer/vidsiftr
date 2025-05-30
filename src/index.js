import page from 'page'

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

function processSearch() {
  window.requestAnimationFrame(timestamp => {
    const query = new URLSearchParams(window.location.search).get('q')
    resultsList.textContent = ""

    if (query) {
      // TODO(zmd): submit request to youtube data api for real
      for (let i = 0; i < 3; ++i) {
        const item = document.createElement("li")
        item.textContent = query + ' result #' + i
        resultsList.appendChild(item)
      }
    } else {
      const item = document.createElement("li")
      item.textContent = 'No results.'
      resultsList.appendChild(item)
    }
  })
}

searchForm.addEventListener('submit', event => {
  // TODO(zmd): properly escape/encode as query param
  page('/results?q=' + searchInput.value)
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
