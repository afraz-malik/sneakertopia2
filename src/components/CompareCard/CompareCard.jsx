import React from 'react'
import { Link } from 'react-router-dom'
import CompareCardCss from './CompareCard.module.scss'
const CompareCard = () => {
  return (
    <Link to="/details" className={CompareCardCss.container}>
      <img alt="" src="images/sneaker 1 1.png" />
      <div className={CompareCardCss.desp}>
        <h3>Air Max pegasus 37</h3>
        <div className={CompareCardCss.row}>
          <div className={CompareCardCss.col}>Ratings</div>
          <div className={CompareCardCss.col}>
            <span className={`${CompareCardCss.checked} fa fa-star`}></span>
            <span className={`${CompareCardCss.checked} fa fa-star`}></span>
            <span className={`${CompareCardCss.checked} fa fa-star`}></span>
            <span className={`${CompareCardCss.checked} fa fa-star`}></span>
            <span className={`${CompareCardCss.checked} fa fa-star`}></span>
          </div>
        </div>
        <div className={CompareCardCss.row}>
          <div className={CompareCardCss.col}>Price</div>
          <div className={CompareCardCss.col}>$249</div>
        </div>
        <div className={CompareCardCss.row}>
          <div className={CompareCardCss.col}>Expert Score</div>
          <div className={CompareCardCss.col}>4.9</div>
        </div>
        <div className={CompareCardCss.row}>
          <div className={CompareCardCss.col}>Sizes</div>
          <div className={CompareCardCss.col}>S | M | L</div>
        </div>
        <div className={CompareCardCss.row}>
          <div className={CompareCardCss.col}>Colors</div>
          <div className={CompareCardCss.col}>
            <span
              className={CompareCardCss.colors}
              style={{ background: 'black' }}
            ></span>
            <span
              className={CompareCardCss.colors}
              style={{ background: 'white' }}
            ></span>
            <span
              className={CompareCardCss.colors}
              style={{ background: '#38BFF9' }}
            ></span>
            <span
              className={CompareCardCss.colors}
              style={{ background: '#F93872' }}
            ></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CompareCard
