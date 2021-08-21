/* eslint-disable accessor-pairs */
import './verse-item.js'

class VersesList extends HTMLElement {
  constructor () {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }

  set verses (verses) {
    this._verses = verses
    this.render()
  }

  render () {
    this._shadowRoot.innerHTML = ''
    this._verses.forEach((verse) => {
      const verseItemEl = document.createElement('verse-item')
      verseItemEl.verse = verse
      console.log(verse)
      this._shadowRoot.appendChild(verseItemEl)
    })
  }

  renderError (message) {
    this._shadowRoot.innerHTML = ''
    this._shadowRoot.innerHTML = `
                        <style>
                        .placeholder {
                            font-weight: lighter;
                            color: rgba(0, 0, 0, 0.5);
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                        }
                        </style>`
    this._shadowRoot.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }
}

customElements.define('verses-list', VersesList)
