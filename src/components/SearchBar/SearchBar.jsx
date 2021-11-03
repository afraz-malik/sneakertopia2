import React, { useState } from 'react'
import { useHistory } from 'react-router'
import SearchBarCss from './SearchBar.module.scss'
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
    </div>
  )
}

export default SearchBar
