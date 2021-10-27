import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ProductCover from '../../components/ProductCover/ProductCover'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductDetailsCss from './ProductDetails.module.scss'
const productApi = {
  id: 1,
  title: 'Nike AIR',
  price: '99.5',
  model: 'Air Jordan',
  release_date: '2021-08-20',
  sku: 'DJ1034 200',
  upper_material: 'Tan',
  score: '4.3',
  sizes: [8, 9, 10, 11, 12, 13, 14, 15],
  colors: ['pink', 'red', 'green', 'black'],
  images: [
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
    'images/Air Edge 274.png',
  ],
  detail:
    'The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’ reunites Jordan Brand with the LA-based model and stylist for a fifth collaboration. Inspired by May’s personal heritage and cultural experiences, the low-top is treated to a luxe makeover, highlighted by a tan suede upper with contrasting hits of black on the collar and tongue.',
  designer: {
    name: 'Tinker Haterfield',
    image: 'images/Mask Group.svg',
    detail:
      'Hatfield was the lead designer of Air Jordans III through XV, XX, and XX3. Additionally, Hatfield co-designed Air Jordans 2010 and XXX. Phil Knight credits the Air Jordan III with saving Nike.',
  },
  comments: [
    {
      id: 1,
      name: 'Dorothy Parker',
      img: 'images/Mask Group.svg',
      date: 'Today at 12:05',
      comment:
        'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
    },
    {
      id: 2,
      name: 'Dorothy Parker',
      img: 'images/Mask Group.svg',
      date: 'Today at 12:05',
      comment:
        'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
    },
  ],
}
const ProductDetails = () => {
  return (
    <div>
      <NavBar />
      <div className={ProductDetailsCss.container}>
        <SearchBar />
        <div className={ProductDetailsCss.product_cover}>
          <div className={ProductDetailsCss.blank}>
            <div className={ProductDetailsCss.name}>
              <h5>Men's Shoe</h5>
              <h2>Nike Air Edge 270</h2>
              <p>
                The Nike Air Edge 270 takes the look of retro basketball and
                puts it through a modern lens.
              </p>
            </div>
          </div>
          <ProductCover images={productApi.images} />
          <div className={ProductDetailsCss.colors}>
            <h5>COLOR OPTIONS</h5>
            <ul>
              <li>White</li>
              <li>Blue</li>
              <li>Green</li>
              <li>Red</li>
            </ul>
          </div>
        </div>
        <div className={ProductDetailsCss.product_details}>
          <div>
            <h3>PRODUCT DETAILS</h3>
            <p>
              The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’
              reunites Jordan Brand with the LA-based model and stylist for a
              fifth collaboration. Inspired by May’s personal heritage and
              cultural experiences, the low-top is treated to a luxe makeover,
              highlighted by a tan suede upper with contrasting hits of black on
              the collar and tongue. The midsole is enlivened with jade accents
              and a metallic gold shank plate, both of which nod to May’s first
              ever piece of jewelry — a bracelet that was gifted by her
              grandmother.
            </p>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
