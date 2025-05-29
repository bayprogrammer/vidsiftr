import page from 'page'

const searchPage = document.getElementById('page-search')
const resultsPage = document.getElementById('page-results')
const aboutPage = document.getElementById('page-about')

const pages = [searchPage, resultsPage, aboutPage]

function flipTo(pageEle) {
  window.requestAnimationFrame(timestamp => {
    pages.filter(ele => ele !== pageEle)
         .forEach(ele => ele.classList.add('page-hidden'))
    pageEle.classList.remove('page-hidden')
  })
}

page('/', () => flipTo(searchPage))
page('/results', () => flipTo(resultsPage))
page('/about', () => flipTo(aboutPage))
page()
