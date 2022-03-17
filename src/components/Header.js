import React from 'react'
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<>
        <header className='header'>
            <Link className='header__text' to='/'>
                <h1 className='header__text'>Entre Olas</h1>
            </Link>
            <CartWidget />
            <NavBar />
        </header>
    </>
    )
}

export default Header