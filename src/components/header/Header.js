import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { BsCart4 } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(true)
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bar} onClick={() => setShowMenu((showMenu) => !showMenu)}>
          <GoThreeBars />
        </div>
        <ul className={css.menu} style={{display: showMenu ? 'inherit' : 'none' }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>Eng</li>
          </ul>
        <input type="text" placeholder='search' className={css.search} />
        <BsCart4 className={css.cart}></BsCart4>
      </div>
    </div>
  )
}

export default Header