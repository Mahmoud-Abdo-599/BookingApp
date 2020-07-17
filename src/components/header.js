import React from 'react';
import logo from '../img/logo.png';
import user from '../img/user.jpg';
import { ReactComponent as SearchIcon } from '../img/SVG/magnifying-glass.svg';
import { ReactComponent as BookMark } from '../img/SVG/bookmark.svg';
import { ReactComponent as IconChat } from '../img/SVG/chat.svg';


const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" />

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="search hotels" />
                <button className="search__button">
                    <SearchIcon className="search__icon" />
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <BookMark className="user-nav__icon" />
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <IconChat className="user-nav__icon" />
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src={user} alt="user photo" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Mahmoud</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
