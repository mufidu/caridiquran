/* eslint-disable accessor-pairs */
const axios = require('axios')

class VerseItem extends HTMLElement {
  constructor () {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }

  set verse (verse) {
    return this.setter(verse)
  }

  async setter (verse) {
    this._verse = verse
    const arabText = await axios.get(`https://api.alquran.cloud/v1/ayah/${this._verse.number}`)
    this._arabText = arabText.data.data.text
    console.log(this._arabText)
    this.render()
  }

  render () {
    this._shadowRoot.innerHTML = `
            <style>
            .verse {
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }

            .verse .fan-art-verse {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }

            .verse-info {
                padding: 24px;
            }

            .verse-info > h2 {
                font-weight: lighter;
            }

            .verse-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
            </style>
            <div class="verse">
            <img class="fan-art-verse" src="${this._verse.number}" alt="Fan Art">
                <div class="verse-info">
                <h2>${this._arabText}</h2>
                <p>${this._verse.text}</p>
                <p>${this._verse.surah.englishName}:${this._verse.numberInSurah}</p></div>
            </div>
        `
  }
}

customElements.define('verse-item', VerseItem)
