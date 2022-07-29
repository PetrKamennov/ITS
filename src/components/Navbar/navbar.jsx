import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './navbar.css'
import logo from '../Navbar/logo.svg'

const Navbar = () => {

    // to change burger classes
    const [menu__icon, setBurgerClass] = useState("menu__icon")
    const [menu__iconclose, setBurger2Class] = useState("menu__icon-close")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [header__class, setHeaderClass] = useState("header")
    const [header__logo, setLogoClass] = useState("header__logo")


    // toggle burger menu and header change
    const MainOrAnother = () => {
        if (window.location.pathname === '/'){
            setLogoClass("header__logo hidden")
        }
        else{
            setLogoClass("header__logo")
        }
    }
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("menu__icon active")
            setBurger2Class("menu__icon-close active")
            setMenuClass("menu visible")
            setHeaderClass("header active")
        }
        else {
            setBurgerClass("menu__icon")
            setBurger2Class("menu__icon-close")
            setMenuClass("menu hidden")
            setHeaderClass("header")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    const logoButton = () => {
        setBurgerClass("menu__icon")
        setBurger2Class("menu__icon-close")
        setMenuClass("menu hidden")
        setHeaderClass("header")
        setLogoClass("header__logo hidden")
    }


    const paginationOnSite = () => {
        setBurgerClass("menu__icon")
        setBurger2Class("menu__icon-close")
        setMenuClass("menu hidden")
        setHeaderClass("header")
        setLogoClass("header__logo")
    }
    

    return(
        <header className={header__class} onLoad={MainOrAnother}>
            <Link to="/" onClick={logoButton}><img src={logo} alt='logo' className={header__logo}/></Link>
                    <div className={menu__iconclose} onClick={updateMenu}>
                        <span className="menu__icon-close__top" ></span>
                        <span className="menu__icon-close__bottom"></span>
                    </div>
                    <div className={menu__icon} onClick={updateMenu} >
                        <span></span>
                    </div>

                    <div className={menu_class}>
                        <ul className="menu__list">
                            <li>
                                <Link to="/about" className="header__txt" onClick={paginationOnSite}>О НАС</Link>
                            </li>
                            <li>
                                <Link to="/directions" className="header__txt" onClick={paginationOnSite}>НАПРАВЛЕНИЯ</Link>
                            </li>
                            <li>
                                <Link to="/application" className="header__txt" onClick={paginationOnSite}>ПОДАТЬ ЗАЯВКУ</Link>
                            </li>
                            <li>
                                <Link to="/calendar" className="header__txt" onClick={paginationOnSite}>КАЛЕНДАРЬ</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="header__txt" onClick={paginationOnSite}>БЛОГ</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="header__txt" onClick={paginationOnSite}>КОНТАКТЫ</Link>
                            </li>
                        </ul>
                    </div>
            </header>
    )
}

export default Navbar