import React from 'react'
import NavBar from './NavBar';
import NavIcon from './NavIcon';

const Header = () => {
    return (<>
        <header className='header'>
            <NavIcon />
            <NavBar />
        </header>
    </>
    )
}

export default Header