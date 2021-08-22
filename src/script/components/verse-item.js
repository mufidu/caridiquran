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
        this.render()
    }

    render () {
        this._shadowRoot.innerHTML = `
            <style>
                .verse {
                box-shadow: .2rem .2rem .3rem  rgba(0, 0, 0, 0.2);
                border-radius: .5rem;
                width: 50%;
                margin-bottom: 2rem;
                margin-left: auto;
                margin-right: auto;
                }

                .verse-content {
                    padding: 1.5rem;
                }

                .verse-content > p {
                    margin-top: .5rem;
                }

                .arabText {
                    text-align: right;
                    font-size: 1.5rem;
                }

                audio {
                    margin-left: 1rem;
                    margin-bottom: 1rem;
                }

                @media screen and (max-width: 850px){
                    .verse {
                        width: 85%;
                    }

                    audio {
                        margin-left: 0;
                        margin-bottom: 0;
                    }
                }
            </style>
            <div class="verse">
                <div class="verse-content">
                    <p class="arabText">${this._arabText}</p>
                    <p>${this._verse.text}</p>
                    <p><b>(Q.S. ${this._verse.surah.englishName}:${this._verse.numberInSurah})</b></p>
                </div>
                
                <audio controls preload="none">

                <source src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/${this._verse.number}.mp3" type="audio/mpeg">

                Maaf, browser Anda tidak mendukung pemutaran audio.
                </audio>
            </div>
        `
    }
}

customElements.define('verse-item', VerseItem)
