import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="header__logo">
                    <strong>COSMETIZE</strong>
                </div>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchOutlinedIcon className='header__searchIcon' />
            </div>

            <Link to='/products' style={{ textDecoration: 'none' }}>
                <div className="header__option">
                    <span className="header__optionLineOne">Check</span>
                    <span className="header__optionLineTwo">Products</span>
                </div>
            </Link>

            <div className="header__optionBasket">
                <ShoppingCartOutlinedIcon />
            </div>
        </div>
    )
}

export default Header
