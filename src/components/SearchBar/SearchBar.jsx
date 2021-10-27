import React from 'react'
import SearchBarCss from './SearchBar.module.scss'
const SearchBar = () => {
  return (
    <div className={SearchBarCss.container}>
      <input type="text" placeholder="Search" />
      <button>
        <img alt="" src="images/search icon.svg" />
        SEARCH
      </button>
    </div>
  )
}

export default SearchBar
