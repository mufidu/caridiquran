/* eslint-disable accessor-pairs */
class SearchBar extends HTMLElement {
  constructor () {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this._shadowRoot.querySelector('#searchText').value
  }

  render () {
    this._shadowRoot.innerHTML = `
            <style>
            .search-box {
                max-width: 800px;
                box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .2);
                padding: 1rem;
                border-radius: .5rem;
                display: flex;
                background-color: white;
                margin: 0 auto;
            }

            .search-box > input {
                width: 75%;
                padding: .5rem;
                border: 0;
                border-bottom: 1px solid lightgrey;
                font-size: 1.2rem;
            }

            .search-box > input:focus {
                outline: 0;
                border-bottom: 2px solid lightgrey;
            }

            .search-box >  input::placeholder {
                color: lightgrey;
                font-weight: normal;
            }

            .search-box > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 1rem;
                font-size: 1.2rem;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                border: 0;
                transition: all .2s ease-in-out;
            }

            .search-box > button:hover {
                background-color: rgba(0, 0, 0, 0.8);
                transform: scale(1.05);
                box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .2);
            }

            .search-box > button:active {
                background-color: rgba(0, 0, 0, 0.9);
                transform: scale(1);
            }    

            @media screen and (max-width: 550px){
                .search-box {
                    flex-direction: column;
                }

                .search-box > input {
                    width: 100%;
                    margin-bottom: 1rem;
                }

                .search-box > button {
                    margin: 0 auto;
                    width: 50%;
                }
            }
            </style>
            <div id="search-box" class="search-box">
                <input
                    placeholder="Mau ayat tentang apa?"
                    id="searchText"
                    type="search"
                />
                <button id="searchButton" type="submit">Cari</button>
            </div>
        `

    this._shadowRoot
      .querySelector('#searchButton')
      .addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-bar', SearchBar)
