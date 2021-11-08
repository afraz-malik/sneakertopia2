import React, { useState } from 'react'
import { useHistory } from 'react-router'
import SearchBarCss from './SearchBar.module.scss'
import Skeleton from 'react-loading-skeleton'

const SearchBar = ({ compare }) => {
  const [state, setstate] = useState({
    search: '',
  })
  const [products, setproducts] = useState(null)
  const handleChange = (e) => {
    setstate({ ...state, search: e.target.value })
    setproducts(null)
    fetch(
      `https://mysneakersapp.herokuapp.com/sneakers/api/sneaker/?page=1&size=5&search=${state.search}`
    )
      .then((res) => res.json())
      .then((data) => setproducts(data.results))
  }

  const history = useHistory()
  return (
    <div className={SearchBarCss.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          return compare ? null : history.push(`/?${state.search}`)
        }}
      >
        <div>
          <input
            type="text"
            placeholder={compare ? 'Compare with' : 'Search'}
            value={state.search}
            onChange={handleChange}
          />
          {/* {state.search ? (
            products ? (
              <ul>
                {products.map((product, j) => (
                  <li
                    key={j}
                    onClick={() => history.push('/details')}
                    // className={[idx].value === product ? SearchBarCss.active : null}
                  >
                    {product.product_name}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {[...Array(5)].map((ar) => (
                  <li>
                    <Skeleton width={200} height={30} />
                  </li>
                ))}
              </ul>
            )
          ) : null} */}
        </div>

        <button type="submit">
          <img alt="" src="images/search icon.svg" />
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default SearchBar
