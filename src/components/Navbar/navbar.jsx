import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './navbar.css'
import logo from '../Navbar/logo.svg'

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [header__class, setHeaderClass] = useState("header")

    // toggle burger menu and header change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setHeaderClass("header active")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setHeaderClass("header")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    

    return(
            <header className={header__class}>
                <Link to="/"><img src={logo} alt='logo' className='header__logo'/></Link>
                <div>
                    <nav>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                        </div>
                    </nav>

                    <div className={menu_class}>
                        <ul className="menu__list">
                            <li>
                                <Link to="/about" className="header__txt">О НАС</Link>
                            </li>
                            <li>
                                <Link to="/directions" className="header__txt">НАПРАВЛЕНИЯ</Link>
                            </li>
                            <li>
                                <Link to="/application" className="header__txt">ПОДАТЬ ЗАЯВКУ</Link>
                            </li>
                            <li>
                                <Link to="/calendar" className="header__txt">КАЛЕНДАРЬ</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="header__txt">БЛОГ</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="header__txt">КОНТАКТЫ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
    )
}

export default Navbar