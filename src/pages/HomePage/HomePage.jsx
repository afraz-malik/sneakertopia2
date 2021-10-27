import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/NavBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import HomePageCss from './HomePage.module.scss'
const HomePage = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    // setstate({
    //   ...state,
    //   search: location.search ? decodeURI(location.search.substr(1)) : 'Latest',
    // })
    // eslint-disable-next-line
  }, [location])
  const initialState = {
    // search: location.search ? decodeURI(location.search.substr(1)) : 'Latest',
    search: '',
    sortby: 'All Categories',
    date: null,
    category: null,
  }
  const [state, setstate] = React.useState(initialState)
  const [toggle, settoggle] = React.useState({
    sortby: false,
    filter: false,
  })
  return (
    <div className={HomePageCss.container}>
      <Navbar />
      <Header />
      <div className={HomePageCss.nav}>
        <ul>
          <li onClick={() => settoggle({ ...toggle, filter: !toggle.filter })}>
            {toggle.filter ? 'Hide Filters' : 'Show Filters'}
            <img
              alt=""
              className={`${HomePageCss.arrow} fuckingarrow`}
              src="images/Caret.png"
              style={{ transform: toggle.filter ? 'rotate(0deg)' : null }}
            />
            &emsp; &emsp; &emsp;{' '}
            <span
              style={{
                textDecoration: 'underline',
                color: 'black',
                display: toggle.filter ? 'inline-block' : 'none',
              }}
              onClick={() => setstate(initialState)}
            >
              Reset
            </span>
          </li>
          <li>Showing Results for "Nike"</li>
          <li>
            <div className={HomePageCss.box}>
              <div
                className={HomePageCss.dropdown}
                onClick={() => settoggle({ ...toggle, sortby: !toggle.sortby })}
              >
                <span>Sort by</span>
                <h3>{state.sortby}</h3>
                <img alt="" src="images/Caret.png" />
              </div>
              <div
                className={HomePageCss.dd_content}
                style={
                  toggle.sortby ? { display: 'block' } : { display: 'none' }
                }
              >
                <ul>
                  <li
                    onClick={() => {
                      setstate({ ...state, sortby: 'Popular' })
                      settoggle({ ...toggle, sortby: false })
                    }}
                  >
                    Popular
                  </li>
                  <li
                    onClick={() => {
                      setstate({ ...state, sortby: 'New' })
                      settoggle({ ...toggle, sortby: false })
                    }}
                  >
                    New
                  </li>
                  <li
                    onClick={() => {
                      setstate({ ...state, sortby: 'Avaiablity' })
                      settoggle({ ...toggle, sortby: false })
                    }}
                  >
                    Availablity
                  </li>
                  <li
                    onClick={() => {
                      setstate({ ...state, sortby: 'Price (low-high)' })
                      settoggle({ ...toggle, sortby: false })
                    }}
                  >
                    Price (low-high)
                  </li>
                  <li
                    onClick={() => {
                      setstate({ ...state, sortby: 'Price (high-low)' })
                      settoggle({ ...toggle, sortby: false })
                    }}
                  >
                    Price (high-low)
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={HomePageCss.filter_cards}>
        {toggle.filter ? (
          <div className={HomePageCss.sideMenu}>
            {/* <SideMenu setstate={setstate} state={state} /> */}
          </div>
        ) : null}
        <div
          className={`${HomePageCss.cards} ${
            toggle.filter ? HomePageCss.cardsWithFilter : null
          }`}
        >
          {[...Array(24)].map((el, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
