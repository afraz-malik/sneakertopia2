import React, { useState } from 'react'
import { useHistory } from 'react-router'
import SearchBarCss from './SearchBar.module.scss'
// import {
//   Elasticsearch,
//   SearchBox,
//   Facet,
//   Results,
//   MyCardItem,
// } from 'react-elasticsearch'
const SearchBar = () => {
  const [state, setstate] = useState({
    search: '',
  })
  const history = useHistory()
  return (
    <div className={SearchBarCss.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          history.push(`/?${state.search}`)
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={state.search}
          onChange={(e) => setstate({ ...state, search: e.target.value })}
        />
        <button type="submit">
          <img alt="" src="images/search icon.svg" />
          SEARCH
        </button>
      </form>
      {/* <Elasticsearch url="https://mysneakersapp.herokuapp.com/sneakers/api/sneaker/?search=nike&page=3&size=50">
        <SearchBox id="mainSearch" />
        <Facet id="actors" fields={['actors']} />
        <Facet id="releasedYear" fields={['releasedYear']} />
        <Results
          id="results"
          items={(data) =>
            // Map on result hits and display whatever you want.
            data.map((item) => (
              <MyCardItem key={item._id} source={item._source} />
            ))
          }
        />
      </Elasticsearch> */}
    </div>
  )
}

export default SearchBar
