import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";

function Header() {
  return (
    <div>
       <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large"/>
        <div className="header__logoTitle">eShop</div>
      </div>
      <div className="header__search">
        <input type="text" className='header__searchInput'/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon className='itemBasket'/>
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header