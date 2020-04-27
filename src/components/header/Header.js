import React, { useState, useContext } from 'react'
import style from './css/header.module.css'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
import TooglerNav from './TogglerNav'
import FeedBanner from './FeedBanner'
import intl from 'react-intl-universal'

const Header = () => {
  const [displayBanner, setDisplayBanner] = useState('block')
  const { pathname } = useLocation()
  const theme = useContext(ThemeContext)
  const pages = intl.get('header')
  const sticky = intl.get('sticky')

  const setLocale = (locale) => {
    localStorage.setItem('goodnewscoronavirus', locale)
    window.location.href = '/'
  }

  const navLinks = () => (
    <>
      {
        Object.keys(pages).map((item, index) => (
          <Link key={index} to={item} className={`nav-link ${style.navItem} ${pathname === '/' + item ? style.active : ''}`} onClick={ () => { scrollTop() } }> {pages[item]} </Link>
        ))
      }
      <Link className={`${style.intlNavItem} ${localStorage.getItem('goodnewscoronavirus') === 'pt-BR' ? style.intlNavItemActive : ''}`} onClick={ () => { setLocale('pt-BR') } }> PT </Link>
      <Link className={`${style.intlNavItem} ${localStorage.getItem('goodnewscoronavirus') === 'en-US' ? style.intlNavItemActive : ''}`} onClick={ () => { setLocale('en-US') } }> EN </Link>
    </>
  )

  const renderDesktopNav = () => (
    <div
      className={`text-center sticky-top ${style.headerLinks} p-1 shadow-sm ${
        themes[theme + '-secundary']
      }`}
    >
      <nav className="nav container">{navLinks()}</nav>
    </div>
  )

  function scrollTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top ${
          style.nav
        } ${themes[theme + '-primary']}`}
      >
        <div className={`container ${style.containerPadX}`}>
          <a className={`navbar-brand ${style.brand}`} href="/">
            <img className={style.logoIcon} src={logo} alt='The Good News Corona Virus' />
          </a>

          <TooglerNav
            onClickAct={() =>
              displayBanner === 'none'
                ? setDisplayBanner('block')
                : setDisplayBanner('none')
            }
          >
            {navLinks()}
          </TooglerNav>

          <FeedBanner displayBanner={displayBanner} />

        </div>

      </nav>

      {renderDesktopNav()}

      <div className={`text-center sticky-top ${style.headerMsg} p-1 shadow-sm`}>
        <span>{sticky.msg1}</span>{sticky.msg2}
      </div>
    </>
  )
}

export default Header
