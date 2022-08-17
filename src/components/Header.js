import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import ThemeSwitcher from "./Theme/ThemeSwitcher";
import logo from '../assets/images/logo/safir-logo-white.png'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {useCart} from "react-use-cart"
//import "./Navbar.css";

function Header() {
const {t}=useTranslation();



function handleClick(lang){
i18next.changeLanguage(lang);
}

const [click, setClick] = useState(false);

//const handleClick = () => setClick(!click);

const useThemeSwitcher = ThemeSwitcher(); // header
const{totalItems}=useCart();
return (


<header>


<div className="header-top">
<div className="container">

<div className="left-side">
<div>
<i className="fas fa-phone-alt"></i>
<a href="/" class="animate__animated animate__bounce">{t("header.tel")}</a>
</div> 
<div>
<i className="fas fa-envelope"></i>
<a href="/">{t("header.mail")} </a> 
</div>

</div>

<div className="right-side">
<div className="dropdown">
<button className="btn btn " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
<i className="fal fa-user"></i>
</button>
<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
<Link to='/signin'><a className="dropdown-item" href="#">{t("header.signin")}</a></Link>
<Link to='/signup'><a className="dropdown-item" href="#">{t("header.signup")}</a></Link>
</ul>
</div>
<div className="dropdown ">
<button className="btn btn " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
<i className="fas fa-globe"></i>
</button>
<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
<li className="lang" onClick={()=> handleClick("az")}><a className="dropdown-item" href="#">AZ</a></li>
<li className="lang" onClick={()=> handleClick("en")}><a className="dropdown-item" href="#">EN</a></li>
</ul>
</div>
{useThemeSwitcher} 

</div>
</div>
</div>

<div className="header-bottom">
<nav className="navbar">
<div className="container">
<div className="logo">
<Link className="logo-img" to="/">
<img data-aos="fade-down" src={logo} width={150} alt="" /></Link>
</div> 

<div className="nav-content  ">

<ul className={click ? "nav-menu active" : "nav-menu"}
onClick={() => setClick(false)}>
<li className="nav-item">
<NavLink  className="nav-link " activeClassName='active' exact to="/">{t("header.home")}</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link "activeClassName='active'  to="/shop">{t("header.shop")}</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link "activeClassName='active'  to="/collection">{t("header.collection")} </NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link "activeClassName='active'  to="/blog">{t("header.blog")}</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link "activeClassName='active'  to="/about">{t("header.about")}</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link " activeClassName='active' to="/contact">{t("header.contact")}</NavLink>
</li>
</ul>
</div>

<div className="search-part">

<input type="text" placeholder={t("header.search")} />
<div className="search" />
</div>
<div className="icon-set">
<a href="/" className="like me-3"><i className="far fa-heart"></i>
</a>
<Link to="/cart" className="addtocart">
<i className="fal fa-shopping-bag"></i><a href="#/" className="cart-total">{totalItems}</a>
</Link>
</div>

<div className="nav-icon" onClick={() => setClick(!click)}
>
{click ? (
<i className="fa-solid fa-xmark"></i>
) : (
<i className="fa-solid fa-bars"></i>
)}
</div>
</div>
</nav>
</div>
</header>
);
}

export default Header;
