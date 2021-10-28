import React, { useEffect } from 'react'
import CompareCard from '../../components/CompareCard/CompareCard'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import CompareCss from './Compare.module.scss'
const Compare = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <NavBar />
      <div className={CompareCss.container}>
        <SearchBar />
        <div className={CompareCss.desp}>
          <h1>COMPARE</h1>
          <p>
            Stay on top of the ever-changing sneaker and streetwear markets
            using our super-powered search engine and comparison tool.
          </p>
        </div>
      </div>
      <div className={CompareCss.cards}>
        <CompareCard />
        <CompareCard />
        <CompareCard />
      </div>
    </div>
  )
}

export default Compare
