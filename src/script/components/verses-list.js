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

    async render () {
        this._shadowRoot.innerHTML = `
                                <style>
                                    p {
                                        text-align: center;
                                        font-size: 1.2em;
                                    }
                                </style>        
                                <p>هناك ${this._verses.count} آيات</p>
                            `

        for (let i = 0; i < this._verses.matches.length; i++) {
            const verse = this._verses.matches[i]
            const verseItemEl = document.createElement('verse-item')
            verseItemEl.verse = verse
            // sleep for 0.5 second each request
            await new Promise(resolve => setTimeout(resolve, 500))
            this._shadowRoot.appendChild(verseItemEl)
        }
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
