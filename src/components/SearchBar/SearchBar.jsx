import React, { useState } from 'react'
import { useHistory } from 'react-router'
import SearchBarCss from './SearchBar.module.scss'
const SearchBar = ({}) => {
  const [state, setstate] = useState({
    search: '',
  })
  const history = useHistory()
  return (
    <div className={SearchBarCss.container}>
      <input
        type="text"
        placeholder="Search"
        value={state.search}
        onChange={(e) => setstate({ ...state, search: e.target.value })}
      />
      <button onClick={() => history.push(`/?${state.search}`)}>
        <img alt="" src="images/search icon.svg" />
        SEARCH
      </button>
    </div>
  )
}

export default SearchBar
