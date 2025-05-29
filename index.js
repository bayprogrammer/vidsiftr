import page from 'page'

const searchPage = document.getElementById('page-search')
const resultsPage = document.getElementById('page-results')
const aboutPage = document.getElementById('page-about')

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-box')

const pages = [searchPage, resultsPage, aboutPage]

function flipTo(pageEle) {
  window.requestAnimationFrame(timestamp => {
    pages.filter(ele => ele !== pageEle)
         .forEach(ele => ele.classList.add('page-hidden'))
    pageEle.classList.remove('page-hidden')
  })
}

function processSearch(query) {
  // TODO(zmd): submit request to youtube data api for real
  console.log('Searching for "' + query + '"...')
}

searchForm.addEventListener('submit', event => {
  // TODO(zmd): properly escape/encode as query param
  page('/results?q=' + searchInput.value)
  event.preventDefault()
})

page('/', () => flipTo(searchPage))
page('/results', () => {
  flipTo(resultsPage)

  const searchParams = new URLSearchParams(window.location.search)

  processSearch(searchParams.get("q"))
})
page('/about', () => flipTo(aboutPage))
page.start()
