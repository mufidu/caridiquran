class DataSource {
  static searchClub (keyword) {
    return fetch(
            `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`
    )
      .then((response) => response.json())
      .then((resJSON) => {
        if (resJSON.teams) {
          return Promise.resolve(resJSON.teams)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`${keyword} is not found`)
        }
      })
  }
}

export default DataSource
