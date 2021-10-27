import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import HeaderCss from './Header.module.scss'
const Header = () => {
  return (
    <div className={HeaderCss.container}>
      <div className={HeaderCss.insidecontainer}>
        <h1>FIND THE PERFECT PAIR</h1>
        <p>
          Stay on top of the ever-changing sneaker and streetwear markets using
          our super-powered search engine and comparison tool.
        </p>
        <SearchBar />
      </div>
    </div>
  )
}

export default Header
