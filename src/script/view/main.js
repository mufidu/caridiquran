import DataSource from '../data/data-source.js'
import '../components/search-bar.js'
import '../components/club-list.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const clubListElement = document.querySelector('club-list')

  const onButtonSearchClicked = async () => {
    try {
      const res = await DataSource.searchClub(searchElement.value)
      renderResult(res)
    } catch {
      fallbackResult(`${searchElement.value} is not a valid club name, or error`)
    }
  }

  const renderResult = (results) => {
    clubListElement.clubs = results
  }

  const fallbackResult = (message) => {
    clubListElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default main
