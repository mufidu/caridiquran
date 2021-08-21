import DataSource from '../data/data-source.js'
import '../components/search-bar.js'
import '../components/verses-list.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const versesList = document.querySelector('verses-list')

  const onButtonSearchClicked = async () => {
    try {
      let res = await DataSource.searchVerse(searchElement.value)
      res = res.data.data.matches
      versesList.verses = res
    } catch {
      versesList.renderError(`Maaf, ${searchElement.value} tidak ditemukan.`)
    }
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default main
