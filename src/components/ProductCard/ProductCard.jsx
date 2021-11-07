import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import ProductCardCss from './ProductCard.module.scss'

const ProductCard = () => {
  const [loading, setloading] = useState(true)
  setTimeout(function () {
    setloading(false)
  }, 3000)
  console.log(loading)
  return (
    <Link to="/details" className={ProductCardCss.card}>
      <div className={ProductCardCss.img}>
        {loading ? (
          <Skeleton height={150} />
        ) : (
          <img alt="" src="images/sneaker 1 1.png" />
        )}
      </div>
      <div className={ProductCardCss.desp}>
        {loading ? <Skeleton /> : <h2>Air Max pegasus 37</h2>}
        {loading ? <Skeleton /> : <p>Mens Running Shoes</p>}
      </div>
    </Link>
  )
}

export default ProductCard
