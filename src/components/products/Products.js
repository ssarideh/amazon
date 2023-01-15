import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
  const [ parent ] = useAutoAnimate()
  const [ menuProducts, setMenuProducts ] = useState(ProductsData)

  const handleFilter = type => {
      setMenuProducts(ProductsData?.filter((product) => product.type === type))
  }

  return (
    <div className={css.container}>
        <img src={Plane} alt="" />
        <h1>Our Featureed Products</h1>
        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                <li onClick={() => handleFilter('skin care')}>Skin Care</li>
                <li onClick={() => handleFilter('conditioner')}>Conditions</li>
                <li onClick={() => handleFilter('foundation')}>Foundations</li>
            </ul>
            <div className={css.list} ref={parent}>
                {menuProducts?.map(({name, detail, price, img}, i) => 
                    <div className={css.product} key={i}>
                        <div className="left-s">
                            <div className="name">
                                <span>{name}</span>
                                <span>{detail}</span>
                            </div>
                            <span>{price}</span>
                            <div>Shop Now</div>
                        </div>
                        <img src={img} alt="" className='img-p'/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Products