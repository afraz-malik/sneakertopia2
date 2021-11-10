import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import ProductCardCss from './ProductCard.module.scss'

const ProductCard = ({product}) => {
  const [loading, setloading] = useState(true)
  setTimeout(function () {
    setloading(false)
  }, 3000)
  // if(product) setloading(false)
  // else setloading(true)
  console.log(product)
  return (
    <Link to="/details" className={ProductCardCss.card}>
      <div className={ProductCardCss.img}>
        {loading ? (
          <Skeleton height={150} />
        ) : (
    
          <img alt="" src={product.images.length? product.images[0] : null}/>
          // <img alt="" src="images/sneaker 1 1.png" />
        )}
      </div>
      <div className={ProductCardCss.desp}>
        {loading ? <Skeleton /> : <h2>{product.product_name}</h2>}
        {loading ? <Skeleton /> : <p>{product.product_type}</p>}
        {/* {loading ? <Skeleton /> : <h2>Air Max pegasus 37</h2>} */}
        {/* {loading ? <Skeleton /> : <p>Mens Running Shoes</p>} */}
      </div>
    </Link>
  )
}

export default ProductCard
